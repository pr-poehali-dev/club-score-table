import json
import os
import psycopg2
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Get all club content (settings, matches, players, news)
    Args: event with httpMethod
    Returns: JSON with all content data
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    dsn = os.environ.get('DATABASE_URL')
    
    conn = psycopg2.connect(dsn)
    cur = conn.cursor()
    
    cur.execute("SELECT key, value FROM t_p36247929_club_score_table.club_settings")
    settings_rows = cur.fetchall()
    settings = {row[0]: row[1] for row in settings_rows}
    
    cur.execute("""
        SELECT id, match_date, match_time, home_team, away_team, 
               home_score, away_score, stadium, status 
        FROM t_p36247929_club_score_table.matches 
        ORDER BY id DESC
    """)
    matches_rows = cur.fetchall()
    matches = []
    for row in matches_rows:
        matches.append({
            'id': row[0],
            'date': row[1],
            'time': row[2],
            'homeTeam': row[3],
            'awayTeam': row[4],
            'homeScore': row[5],
            'awayScore': row[6],
            'stadium': row[7],
            'status': row[8]
        })
    
    cur.execute("""
        SELECT id, number, name, position, image_url 
        FROM t_p36247929_club_score_table.players 
        ORDER BY number
    """)
    players_rows = cur.fetchall()
    players = []
    for row in players_rows:
        players.append({
            'id': row[0],
            'number': row[1],
            'name': row[2],
            'position': row[3],
            'image': row[4]
        })
    
    cur.execute("""
        SELECT id, title, date, category, image_url, excerpt, content 
        FROM t_p36247929_club_score_table.news 
        ORDER BY id DESC
    """)
    news_rows = cur.fetchall()
    news = []
    for row in news_rows:
        news.append({
            'id': row[0],
            'title': row[1],
            'date': row[2],
            'category': row[3],
            'image': row[4],
            'excerpt': row[5],
            'content': row[6]
        })
    
    cur.close()
    conn.close()
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({
            'settings': settings,
            'matches': matches,
            'players': players,
            'news': news
        }),
        'isBase64Encoded': False
    }
