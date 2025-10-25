import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const API_URL = "https://functions.poehali.dev/b696d169-6b97-4e9c-827a-ea5f9788990a";
const UPDATE_URL = "https://functions.poehali.dev/1b6c3597-2a7d-4834-965a-73478ab29424";

const Admin = () => {
  const { toast } = useToast();
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchContent = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setContent(data);
      setLoading(false);
    } catch (error) {
      toast({
        title: "Ошибка загрузки",
        description: "Не удалось загрузить данные",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  const updateSetting = async (key: string, value: string) => {
    try {
      const response = await fetch(UPDATE_URL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "setting",
          data: { key, value },
        }),
      });
      
      if (response.ok) {
        toast({
          title: "Успешно сохранено",
          description: "Изменения применены",
        });
        fetchContent();
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось сохранить изменения",
        variant: "destructive",
      });
    }
  };

  const deleteItem = async (type: string, id: number) => {
    try {
      const response = await fetch(UPDATE_URL, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          data: { id },
        }),
      });
      
      if (response.ok) {
        toast({
          title: "Удалено",
          description: "Элемент успешно удален",
        });
        fetchContent();
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось удалить элемент",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Загрузка...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Панель Управления
            </h1>
            <p className="text-muted-foreground">Редактируйте контент сайта ФК UNION ВОРОНЕЖ</p>
          </div>

          <Tabs defaultValue="settings" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="settings">Настройки</TabsTrigger>
              <TabsTrigger value="matches">Матчи</TabsTrigger>
              <TabsTrigger value="players">Игроки</TabsTrigger>
              <TabsTrigger value="news">Новости</TabsTrigger>
            </TabsList>

            <TabsContent value="settings" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Основные настройки клуба</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Название клуба</label>
                    <input
                      type="text"
                      defaultValue={content?.settings?.club_name}
                      onBlur={(e) => updateSetting("club_name", e.target.value)}
                      className="w-full px-4 py-2 rounded-md border border-input bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Девиз клуба</label>
                    <input
                      type="text"
                      defaultValue={content?.settings?.club_motto}
                      onBlur={(e) => updateSetting("club_motto", e.target.value)}
                      className="w-full px-4 py-2 rounded-md border border-input bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Город</label>
                    <input
                      type="text"
                      defaultValue={content?.settings?.club_city}
                      onBlur={(e) => updateSetting("club_city", e.target.value)}
                      className="w-full px-4 py-2 rounded-md border border-input bg-background"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="matches" className="space-y-4">
              {content?.matches?.map((match: any) => (
                <Card key={match.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="text-sm text-muted-foreground mb-2">
                          {match.date} • {match.time}
                        </div>
                        <div className="text-lg font-semibold">
                          {match.homeTeam} {match.homeScore !== null ? match.homeScore : "-"} : {match.awayScore !== null ? match.awayScore : "-"} {match.awayTeam}
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          <Icon name="MapPin" size={14} className="inline mr-1" />
                          {match.stadium}
                        </div>
                      </div>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => deleteItem("match", match.id)}
                      >
                        <Icon name="Trash2" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="players" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {content?.players?.map((player: any) => (
                  <Card key={player.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                          {player.number}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg">{player.name}</h3>
                          <p className="text-sm text-muted-foreground">{player.position}</p>
                        </div>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => deleteItem("player", player.id)}
                        >
                          <Icon name="Trash2" size={16} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="news" className="space-y-4">
              {content?.news?.map((item: any) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="text-sm text-muted-foreground mb-1">{item.date}</div>
                        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.excerpt}</p>
                      </div>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => deleteItem("news", item.id)}
                      >
                        <Icon name="Trash2" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Admin;
