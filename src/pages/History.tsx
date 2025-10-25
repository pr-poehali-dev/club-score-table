import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: string;
}

const milestones: Milestone[] = [
  {
    year: "2015",
    title: "Основание клуба",
    description: "ФК UNION был основан группой энтузиастов, мечтавших создать профессиональный футбольный клуб с уникальной философией игры.",
    icon: "Flag",
  },
  {
    year: "2017",
    title: "Первая победа в чемпионате",
    description: "Команда одержала свою первую крупную победу, заняв второе место в региональном чемпионате.",
    icon: "Trophy",
  },
  {
    year: "2019",
    title: "Выход в высшую лигу",
    description: "Исторический момент - ФК UNION получил право выступать в высшей лиге национального чемпионата.",
    icon: "TrendingUp",
  },
  {
    year: "2021",
    title: "Новый стадион",
    description: "Открытие современного стадиона 'Союз' на 25,000 мест стало важной вехой в развитии клуба.",
    icon: "Home",
  },
  {
    year: "2023",
    title: "Победа в Кубке",
    description: "Команда завоевала свой первый трофей - Кубок страны, обыграв в финале действующего чемпиона.",
    icon: "Award",
  },
  {
    year: "2025",
    title: "Топ-3 в чемпионате",
    description: "ФК UNION уверенно входит в тройку сильнейших команд страны, демонстрируя яркий атакующий футбол.",
    icon: "Star",
  },
];

const History = () => {
  const headerSection = useScrollAnimation();
  const heroSection = useScrollAnimation();
  const timelineSection = useScrollAnimation();
  const statsSection = useScrollAnimation();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
        <div className="container mx-auto px-4 py-12">
          <div ref={headerSection.ref} className={`text-center mb-12 ${headerSection.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            История Клуба
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            От скромного начала до одного из ведущих клубов страны - путь ФК UNION
          </p>
        </div>

        <div ref={heroSection.ref} className="max-w-4xl mx-auto mb-16">
          <Card className={`overflow-hidden ${heroSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="aspect-video relative">
              <img
                src="https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1200"
                alt="История клуба"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h2 className="text-3xl font-bold mb-2">10 лет побед и достижений</h2>
                  <p className="text-white/90">С 2015 года мы пишем историю российского футбола</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div ref={timelineSection.ref} className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary"></div>
          
          <div className={`space-y-12 ${timelineSection.isVisible ? '' : 'opacity-0'}`}>
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={`relative pl-24 ${timelineSection.isVisible ? `animate-fade-in-right animation-delay-${Math.min(index, 5)}00` : ''}`}>
                <div className="absolute left-0 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground shadow-lg">
                  <Icon name={milestone.icon as any} size={28} />
                </div>
                
                <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl font-bold text-primary">{milestone.year}</span>
                      <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div ref={statsSection.ref} className={`mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto ${statsSection.isVisible ? '' : 'opacity-0'}`}>
          <Card className={`text-center bg-gradient-to-br from-primary to-primary/80 text-primary-foreground ${statsSection.isVisible ? 'animate-scale-in animation-delay-100' : ''}`}>
            <CardContent className="p-8">
              <Icon name="Users" size={48} className="mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">15,000+</div>
              <div className="text-primary-foreground/90">Болельщиков на матчах</div>
            </CardContent>
          </Card>
          
          <Card className={`text-center bg-gradient-to-br from-secondary to-secondary/80 ${statsSection.isVisible ? 'animate-scale-in animation-delay-200' : ''}`}>
            <CardContent className="p-8">
              <Icon name="Trophy" size={48} className="mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-muted-foreground">Трофеев завоевано</div>
            </CardContent>
          </Card>
          
          <Card className={`text-center bg-gradient-to-br from-primary to-primary/80 text-primary-foreground ${statsSection.isVisible ? 'animate-scale-in animation-delay-300' : ''}`}>
            <CardContent className="p-8">
              <Icon name="Target" size={48} className="mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">250+</div>
              <div className="text-primary-foreground/90">Забитых голов</div>
            </CardContent>
          </Card>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default History;