import json
import os
import psycopg2
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Update club content (matches, players, news, settings)
    Args: event with httpMethod, body containing entity type and data
    Returns: Success or error message
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method not in ['POST', 'PUT', 'DELETE']:
        return {
            'statusCode': 405,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    body_data = json.loads(event.get('body', '{}'))
    entity_type = body_data.get('type')
    data = body_data.get('data')
    
    dsn = os.environ.get('DATABASE_URL')
    conn = psycopg2.connect(dsn)
    cur = conn.cursor()
    
    if method == 'POST':
        if entity_type == 'match':
            cur.execute("""
                INSERT INTO t_p36247929_club_score_table.matches 
                (match_date, match_time, home_team, away_team, home_score, away_score, stadium, status)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
                RETURNING id
            """, (data['date'], data['time'], data['homeTeam'], data['awayTeam'],
                  data.get('homeScore'), data.get('awayScore'), data['stadium'], data['status']))
            new_id = cur.fetchone()[0]
            conn.commit()
            result = {'id': new_id, 'message': 'Match created'}
            
        elif entity_type == 'player':
            cur.execute("""
                INSERT INTO t_p36247929_club_score_table.players 
                (number, name, position, image_url)
                VALUES (%s, %s, %s, %s)
                RETURNING id
            """, (data['number'], data['name'], data['position'], data.get('image')))
            new_id = cur.fetchone()[0]
            conn.commit()
            result = {'id': new_id, 'message': 'Player created'}
            
        elif entity_type == 'news':
            cur.execute("""
                INSERT INTO t_p36247929_club_score_table.news 
                (title, date, category, image_url, excerpt, content)
                VALUES (%s, %s, %s, %s, %s, %s)
                RETURNING id
            """, (data['title'], data['date'], data['category'], 
                  data.get('image'), data.get('excerpt'), data.get('content')))
            new_id = cur.fetchone()[0]
            conn.commit()
            result = {'id': new_id, 'message': 'News created'}
        else:
            cur.close()
            conn.close()
            return {
                'statusCode': 400,
                'headers': {'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Invalid entity type'}),
                'isBase64Encoded': False
            }
    
    elif method == 'PUT':
        if entity_type == 'match':
            cur.execute("""
                UPDATE t_p36247929_club_score_table.matches 
                SET match_date=%s, match_time=%s, home_team=%s, away_team=%s,
                    home_score=%s, away_score=%s, stadium=%s, status=%s, updated_at=CURRENT_TIMESTAMP
                WHERE id=%s
            """, (data['date'], data['time'], data['homeTeam'], data['awayTeam'],
                  data.get('homeScore'), data.get('awayScore'), data['stadium'], 
                  data['status'], data['id']))
            conn.commit()
            result = {'message': 'Match updated'}
            
        elif entity_type == 'player':
            cur.execute("""
                UPDATE t_p36247929_club_score_table.players 
                SET number=%s, name=%s, position=%s, image_url=%s, updated_at=CURRENT_TIMESTAMP
                WHERE id=%s
            """, (data['number'], data['name'], data['position'], data.get('image'), data['id']))
            conn.commit()
            result = {'message': 'Player updated'}
            
        elif entity_type == 'news':
            cur.execute("""
                UPDATE t_p36247929_club_score_table.news 
                SET title=%s, date=%s, category=%s, image_url=%s, excerpt=%s, 
                    content=%s, updated_at=CURRENT_TIMESTAMP
                WHERE id=%s
            """, (data['title'], data['date'], data['category'], data.get('image'),
                  data.get('excerpt'), data.get('content'), data['id']))
            conn.commit()
            result = {'message': 'News updated'}
            
        elif entity_type == 'setting':
            cur.execute("""
                INSERT INTO t_p36247929_club_score_table.club_settings (key, value, updated_at)
                VALUES (%s, %s, CURRENT_TIMESTAMP)
                ON CONFLICT (key) DO UPDATE SET value=%s, updated_at=CURRENT_TIMESTAMP
            """, (data['key'], data['value'], data['value']))
            conn.commit()
            result = {'message': 'Setting updated'}
        else:
            cur.close()
            conn.close()
            return {
                'statusCode': 400,
                'headers': {'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Invalid entity type'}),
                'isBase64Encoded': False
            }
    
    elif method == 'DELETE':
        entity_id = data.get('id')
        if entity_type == 'match':
            cur.execute("DELETE FROM t_p36247929_club_score_table.matches WHERE id=%s", (entity_id,))
        elif entity_type == 'player':
            cur.execute("DELETE FROM t_p36247929_club_score_table.players WHERE id=%s", (entity_id,))
        elif entity_type == 'news':
            cur.execute("DELETE FROM t_p36247929_club_score_table.news WHERE id=%s", (entity_id,))
        else:
            cur.close()
            conn.close()
            return {
                'statusCode': 400,
                'headers': {'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Invalid entity type'}),
                'isBase64Encoded': False
            }
        conn.commit()
        result = {'message': f'{entity_type.capitalize()} deleted'}
    
    cur.close()
    conn.close()
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps(result),
        'isBase64Encoded': False
    }
