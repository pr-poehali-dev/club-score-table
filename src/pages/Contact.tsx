import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const headerSection = useScrollAnimation();
  const formSection = useScrollAnimation();
  const mapSection = useScrollAnimation();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 py-12">
          <div ref={headerSection.ref} className={`text-center mb-12 ${headerSection.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Контакты
          </h1>
          <p className="text-muted-foreground text-lg">
            Свяжитесь с нами по любым вопросам
          </p>
        </div>

        <div ref={formSection.ref} className={`max-w-5xl mx-auto grid md:grid-cols-2 gap-8 ${formSection.isVisible ? '' : 'opacity-0'}`}>
          <Card className={`border-2 ${formSection.isVisible ? 'animate-fade-in-left' : ''}`}>
            <CardHeader>
              <CardTitle className="text-2xl">Отправить сообщение</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <textarea
                    className="w-full px-4 py-2 rounded-md border border-input bg-background min-h-32"
                    placeholder="Ваше сообщение..."
                  ></textarea>
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Отправить
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className={`space-y-6 ${formSection.isVisible ? 'animate-fade-in-right animation-delay-200' : ''}`}>
            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Адрес</h3>
                    <p className="text-muted-foreground">
                      Россия, Москва<br />
                      ул. Спортивная, д. 1<br />
                      Стадион "Союз"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Телефон</h3>
                    <p className="text-muted-foreground">
                      +7 (495) 123-45-67<br />
                      +7 (495) 123-45-68
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      info@fcunion.ru<br />
                      press@fcunion.ru
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-secondary to-secondary/80">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Социальные сети</h3>
                <div className="flex gap-3">
                  <button className="bg-background/50 hover:bg-background p-3 rounded-full transition-all">
                    <Icon name="Facebook" size={24} />
                  </button>
                  <button className="bg-background/50 hover:bg-background p-3 rounded-full transition-all">
                    <Icon name="Instagram" size={24} />
                  </button>
                  <button className="bg-background/50 hover:bg-background p-3 rounded-full transition-all">
                    <Icon name="Twitter" size={24} />
                  </button>
                  <button className="bg-background/50 hover:bg-background p-3 rounded-full transition-all">
                    <Icon name="Youtube" size={24} />
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card ref={mapSection.ref} className={`mt-12 max-w-5xl mx-auto overflow-hidden ${mapSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <div className="aspect-video bg-muted relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.331650866447!2d37.61772131594!3d55.75199998055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2sRed%20Square!5e0!3m2!1sen!2sru!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;