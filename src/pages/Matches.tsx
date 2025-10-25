import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface Match {
  id: number;
  date: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  stadium: string;
  status: "upcoming" | "live" | "finished";
}

const matches: Match[] = [
  {
    id: 1,
    date: "28 Октября",
    time: "19:00",
    homeTeam: "ФК UNION",
    awayTeam: "Спартак",
    stadium: "Стадион Союз",
    status: "upcoming",
  },
  {
    id: 2,
    date: "21 Октября",
    time: "20:00",
    homeTeam: "Динамо",
    awayTeam: "ФК UNION",
    homeScore: 1,
    awayScore: 2,
    stadium: "Стадион Динамо",
    status: "finished",
  },
  {
    id: 3,
    date: "14 Октября",
    time: "18:00",
    homeTeam: "ФК UNION",
    awayTeam: "Зенит",
    homeScore: 3,
    awayScore: 1,
    stadium: "Стадион Союз",
    status: "finished",
  },
];

const Matches = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Расписание Матчей
          </h1>
          <p className="text-muted-foreground text-lg">
            Следите за предстоящими матчами и результатами игр
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {matches.map((match) => (
            <Card key={match.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5 pb-4">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg text-muted-foreground">{match.date}</CardTitle>
                  <Badge
                    variant={match.status === "upcoming" ? "default" : match.status === "live" ? "destructive" : "secondary"}
                    className={match.status === "upcoming" ? "bg-primary" : ""}
                  >
                    {match.status === "upcoming" && "Предстоящий"}
                    {match.status === "live" && "Идет сейчас"}
                    {match.status === "finished" && "Завершен"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-1 text-center">
                    <h3 className={`text-2xl font-bold mb-2 ${match.homeTeam === "ФК UNION" ? "text-primary" : ""}`}>
                      {match.homeTeam}
                    </h3>
                    {match.homeScore !== undefined && (
                      <div className="text-5xl font-bold text-primary">{match.homeScore}</div>
                    )}
                  </div>
                  
                  <div className="px-8 text-center">
                    <div className="text-4xl font-bold text-muted-foreground">
                      {match.status === "finished" ? ":" : "VS"}
                    </div>
                    {match.status === "upcoming" && (
                      <div className="text-sm text-muted-foreground mt-2">{match.time}</div>
                    )}
                  </div>
                  
                  <div className="flex-1 text-center">
                    <h3 className={`text-2xl font-bold mb-2 ${match.awayTeam === "ФК UNION" ? "text-primary" : ""}`}>
                      {match.awayTeam}
                    </h3>
                    {match.awayScore !== undefined && (
                      <div className="text-5xl font-bold text-primary">{match.awayScore}</div>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Icon name="MapPin" size={18} />
                  <span>{match.stadium}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-secondary to-secondary/80">
          <CardContent className="p-8 text-center">
            <Icon name="Calendar" size={48} className="mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Турнирная Таблица</h2>
            <p className="text-foreground/80 mb-4">ФК UNION занимает 3-е место в чемпионате</p>
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              <div className="bg-background/50 rounded-lg p-4">
                <div className="text-3xl font-bold text-primary">12</div>
                <div className="text-sm text-muted-foreground">Игр</div>
              </div>
              <div className="bg-background/50 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-600">8</div>
                <div className="text-sm text-muted-foreground">Побед</div>
              </div>
              <div className="bg-background/50 rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-600">2</div>
                <div className="text-sm text-muted-foreground">Ничья</div>
              </div>
              <div className="bg-background/50 rounded-lg p-4">
                <div className="text-3xl font-bold text-red-600">2</div>
                <div className="text-sm text-muted-foreground">Поражений</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Matches;
