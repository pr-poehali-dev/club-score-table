import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
}

const news: NewsItem[] = [
  {
    id: 1,
    title: "ФК UNION одержал уверенную победу над Зенитом со счетом 3:1",
    date: "14 Октября 2025",
    category: "Матч",
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800",
    excerpt: "Блестящая игра нашей команды принесла важные три очка в турнирной таблице. Голы забили Волков (2) и Новиков.",
  },
  {
    id: 2,
    title: "Новое пополнение в составе: знакомьтесь с нападающим Андреем Морозовым",
    date: "10 Октября 2025",
    category: "Трансфер",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800",
    excerpt: "Клуб объявляет о подписании контракта с талантливым нападающим. Андрей уже присоединился к тренировкам команды.",
  },
  {
    id: 3,
    title: "Открытая тренировка для болельщиков 30 октября",
    date: "8 Октября 2025",
    category: "События",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800",
    excerpt: "Приглашаем всех фанатов на открытую тренировку! Возможность пообщаться с игроками и получить автографы.",
  },
  {
    id: 4,
    title: "ФК UNION запускает детскую футбольную академию",
    date: "5 Октября 2025",
    category: "Академия",
    image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800",
    excerpt: "Набор детей от 6 до 14 лет в нашу новую академию. Профессиональные тренеры, современное оборудование.",
  },
];

const News = () => {
  const headerSection = useScrollAnimation();
  const newsSection = useScrollAnimation();
  const subscribeSection = useScrollAnimation();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 py-12">
          <div ref={headerSection.ref} className={`text-center mb-12 ${headerSection.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Новости Клуба
          </h1>
          <p className="text-muted-foreground text-lg">
            Все самое важное и интересное из жизни ФК UNION
          </p>
        </div>

        <div ref={newsSection.ref} className={`max-w-5xl mx-auto space-y-6 ${newsSection.isVisible ? '' : 'opacity-0'}`}>
          {news.map((item, index) => (
            <Card key={item.id} className={`overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 ${newsSection.isVisible ? `animate-fade-in-up animation-delay-${index}00` : ''}`}>
              <div className="md:flex">
                <div className="md:w-2/5 aspect-video md:aspect-auto">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                        {item.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Icon name="Calendar" size={16} />
                        {item.date}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold leading-tight hover:text-primary transition-colors">
                      {item.title}
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                    <button className="text-primary font-semibold hover:underline flex items-center gap-2">
                      Читать далее
                      <Icon name="ArrowRight" size={18} />
                    </button>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card ref={subscribeSection.ref} className={`mt-12 max-w-5xl mx-auto bg-gradient-to-r from-primary to-primary/80 text-primary-foreground ${subscribeSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <CardContent className="p-8 text-center">
            <Icon name="Bell" size={48} className="mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Подпишитесь на рассылку</h2>
            <p className="text-primary-foreground/90 mb-6 max-w-xl mx-auto">
              Получайте последние новости клуба, информацию о матчах и эксклюзивные предложения
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-2 rounded-md bg-primary-foreground text-foreground"
              />
              <button className="px-6 py-2 bg-secondary text-secondary-foreground rounded-md font-semibold hover:opacity-90 transition-opacity">
                Подписаться
              </button>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default News;