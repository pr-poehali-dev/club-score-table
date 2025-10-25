import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="relative h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920"
              alt="Football Stadium"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://cdn.poehali.dev/files/7b7af2f5-9a40-4f1f-85ad-b5cd6cf79528.jpeg" 
                  alt="FC Union Logo" 
                  className="w-24 h-24 object-contain bg-white/10 rounded-full p-2 backdrop-blur-sm"
                />
                <h1 className="text-6xl font-bold">ФК UNION</h1>
              </div>
              <p className="text-2xl mb-8 text-white/90">
                Сила, единство, победа - наш путь к чемпионству
              </p>
              <div className="flex gap-4">
                <Link to="/matches">
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Расписание матчей
                  </Button>
                </Link>
                <Link to="/team">
                  <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20 backdrop-blur-sm">
                    Наша команда
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Последние матчи
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-4">21 Октября</div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Динамо</span>
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-semibold text-primary">ФК UNION</span>
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <div className="text-sm text-green-600 font-semibold">Победа</div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-4">14 Октября</div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-primary">ФК UNION</span>
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-semibold">Зенит</span>
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <div className="text-sm text-green-600 font-semibold">Победа</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground border-2 border-primary hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="text-sm text-primary-foreground/80 mb-4">28 Октября • 19:00</div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">ФК UNION</span>
                    <span className="text-xl">VS</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-semibold">Спартак</span>
                    <span></span>
                  </div>
                  <div className="text-sm font-semibold">Предстоящий матч</div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <Link to="/matches">
                <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Все матчи
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Статистика сезона
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <Card className="text-center border-2">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Trophy" size={32} className="text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-1">3</div>
                  <div className="text-sm text-muted-foreground">Место в таблице</div>
                </CardContent>
              </Card>

              <Card className="text-center border-2">
                <CardContent className="p-6">
                  <div className="bg-secondary/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Target" size={32} />
                  </div>
                  <div className="text-4xl font-bold mb-1">28</div>
                  <div className="text-sm text-muted-foreground">Голов забито</div>
                </CardContent>
              </Card>

              <Card className="text-center border-2">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Shield" size={32} className="text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-1">8</div>
                  <div className="text-sm text-muted-foreground">Побед</div>
                </CardContent>
              </Card>

              <Card className="text-center border-2">
                <CardContent className="p-6">
                  <div className="bg-secondary/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Users" size={32} />
                  </div>
                  <div className="text-4xl font-bold mb-1">25</div>
                  <div className="text-sm text-muted-foreground">Игроков</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Последние новости
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-xl">
                <div className="aspect-video">
                  <img
                    src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600"
                    alt="News"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">14 Октября 2025</div>
                  <h3 className="font-bold text-lg mb-2">Уверенная победа над Зенитом 3:1</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Блестящая игра команды принесла важные три очка
                  </p>
                  <Link to="/news" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                    Читать далее
                    <Icon name="ArrowRight" size={16} />
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-xl">
                <div className="aspect-video">
                  <img
                    src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600"
                    alt="News"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">10 Октября 2025</div>
                  <h3 className="font-bold text-lg mb-2">Новое пополнение в составе</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Знакомьтесь с нападающим Андреем Морозовым
                  </p>
                  <Link to="/news" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                    Читать далее
                    <Icon name="ArrowRight" size={16} />
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-xl">
                <div className="aspect-video">
                  <img
                    src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600"
                    alt="News"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">5 Октября 2025</div>
                  <h3 className="font-bold text-lg mb-2">Запуск детской академии</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Набор детей от 6 до 14 лет в футбольную академию
                  </p>
                  <Link to="/news" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                    Читать далее
                    <Icon name="ArrowRight" size={16} />
                  </Link>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <Link to="/news">
                <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Все новости
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Присоединяйтесь к нам!</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Станьте частью семьи ФК UNION и поддержите нашу команду на пути к победам
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Связаться с нами
                </Button>
              </Link>
              <Link to="/history">
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground hover:bg-primary-foreground/20">
                  Узнать больше
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
