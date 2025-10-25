import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Player {
  number: number;
  name: string;
  position: string;
  image: string;
}

const players: Player[] = [
  { number: 1, name: "Иван Петров", position: "Вратарь", image: "https://images.unsplash.com/photo-1473010350295-2c82192ebd8e?w=400" },
  { number: 5, name: "Алексей Смирнов", position: "Защитник", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" },
  { number: 7, name: "Дмитрий Козлов", position: "Полузащитник", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400" },
  { number: 9, name: "Михаил Волков", position: "Нападающий", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" },
  { number: 10, name: "Сергей Новиков", position: "Полузащитник", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400" },
  { number: 11, name: "Андрей Морозов", position: "Нападающий", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400" },
];

const Team = () => {
  const headerSection = useScrollAnimation();
  const playersSection = useScrollAnimation();
  const staffSection = useScrollAnimation();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 py-12">
          <div ref={headerSection.ref} className={`text-center mb-12 ${headerSection.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Наша Команда
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Знакомьтесь с игроками ФК UNION - профессионалами, которые каждый день работают ради победы
          </p>
        </div>

        <div ref={playersSection.ref} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 ${playersSection.isVisible ? '' : 'opacity-0'}`}>
          {players.map((player, index) => (
            <Card key={player.number} className={`overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 ${playersSection.isVisible ? `animate-scale-in animation-delay-${Math.min(index, 5)}00` : ''}`}>
              <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold shadow-lg">
                  {player.number}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">{player.name}</h3>
                <p className="text-muted-foreground flex items-center gap-2">
                  <Icon name="Shield" size={18} className="text-primary" />
                  {player.position}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card ref={staffSection.ref} className={`bg-gradient-to-r from-primary to-primary/80 text-primary-foreground ${staffSection.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary-foreground/20 p-4 rounded-full">
                <Icon name="Users" size={32} />
              </div>
              <h2 className="text-3xl font-bold">Тренерский Штаб</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Главный тренер</h3>
                <p className="text-primary-foreground/90">Владимир Иванов</p>
                <p className="text-sm text-primary-foreground/70 mt-1">Опыт работы: 15 лет</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Помощник тренера</h3>
                <p className="text-primary-foreground/90">Павел Сидоров</p>
                <p className="text-sm text-primary-foreground/70 mt-1">Опыт работы: 10 лет</p>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Team;