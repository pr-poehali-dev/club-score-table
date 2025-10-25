import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <img 
                  src="https://cdn.poehali.dev/files/7b7af2f5-9a40-4f1f-85ad-b5cd6cf79528.jpeg" 
                  alt="FC Union Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-2xl font-bold">ФК UNION ВОРОНЕЖ</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Профессиональный футбольный клуб из Воронежа, объединяющий традиции и современный футбол
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Команда
                </Link>
              </li>
              <li>
                <Link to="/matches" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Матчи
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Новости
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Спортивная, д. 1</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@fcunion.ru</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Социальные сети</h3>
            <div className="flex gap-3">
              <button className="bg-primary-foreground/20 hover:bg-primary-foreground/30 p-3 rounded-full transition-all">
                <Icon name="Facebook" size={20} />
              </button>
              <button className="bg-primary-foreground/20 hover:bg-primary-foreground/30 p-3 rounded-full transition-all">
                <Icon name="Instagram" size={20} />
              </button>
              <button className="bg-primary-foreground/20 hover:bg-primary-foreground/30 p-3 rounded-full transition-all">
                <Icon name="Twitter" size={20} />
              </button>
              <button className="bg-primary-foreground/20 hover:bg-primary-foreground/30 p-3 rounded-full transition-all">
                <Icon name="Youtube" size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; 2025 ФК UNION. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;