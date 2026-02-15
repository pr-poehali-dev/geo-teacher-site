import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

const HERO_IMG = "https://cdn.poehali.dev/projects/3621db4e-40aa-425c-a21e-5bc12831b494/files/6f4b6826-cf54-4af6-8ec4-2d2e669a9944.jpg";
const TEACHER_IMG = "https://cdn.poehali.dev/projects/3621db4e-40aa-425c-a21e-5bc12831b494/files/9f3d7870-1a12-4023-b810-89fe26842371.jpg";
const TRAVEL_IMG = "https://cdn.poehali.dev/projects/3621db4e-40aa-425c-a21e-5bc12831b494/files/57c52e1d-8fcd-4414-9bec-53ad0dd550be.jpg";

const navLinks = [
  { href: "#home", label: "Главная", icon: "Home" },
  { href: "#about", label: "О себе", icon: "User" },
  { href: "#lessons", label: "Уроки", icon: "BookOpen" },
  { href: "#materials", label: "Материалы", icon: "FolderOpen" },
  { href: "#gallery", label: "Галерея", icon: "Camera" },
  { href: "#contacts", label: "Контакты", icon: "Mail" },
];

const lessons = [
  { title: "Литосфера и рельеф Земли", grade: "6 класс", icon: "Mountain", desc: "Строение земной коры, горы и равнины" },
  { title: "Климат и погода", grade: "7 класс", icon: "CloudSun", desc: "Атмосфера, климатические пояса, осадки" },
  { title: "Мировой океан", grade: "7 класс", icon: "Waves", desc: "Свойства вод, течения, морские организмы" },
  { title: "Население мира", grade: "10 класс", icon: "Users", desc: "Демография, миграции, урбанизация" },
  { title: "Природные зоны России", grade: "8 класс", icon: "TreePine", desc: "Тундра, тайга, степи и пустыни" },
  { title: "Экономическая география", grade: "11 класс", icon: "TrendingUp", desc: "Ресурсы, промышленность, торговля" },
];

const materials = [
  { title: "Атлас мира (PDF)", icon: "Map", type: "PDF", color: "bg-blue-100 text-blue-700" },
  { title: "Контурные карты", icon: "PenTool", type: "Шаблон", color: "bg-green-100 text-green-700" },
  { title: "Тесты по географии", icon: "ClipboardCheck", type: "Тесты", color: "bg-amber-100 text-amber-700" },
  { title: "Видеоуроки", icon: "Play", type: "Видео", color: "bg-purple-100 text-purple-700" },
  { title: "Презентации", icon: "Presentation", type: "PPTX", color: "bg-rose-100 text-rose-700" },
  { title: "Справочник терминов", icon: "BookText", type: "Словарь", color: "bg-teal-100 text-teal-700" },
];

const galleryPhotos = [
  { src: HERO_IMG, title: "Вид на Землю", location: "Космос" },
  { src: TRAVEL_IMG, title: "Путешествия по миру", location: "Разные страны" },
  { src: TEACHER_IMG, title: "В классе географии", location: "Школа" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600", title: "Альпийские вершины", location: "Швейцария" },
  { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600", title: "Тропический пляж", location: "Мальдивы" },
  { src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600", title: "Горное озеро", location: "Норвегия" },
  { src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600", title: "Северное сияние", location: "Исландия" },
  { src: "https://images.unsplash.com/photo-1523592121529-f6dde35f079e?w=600", title: "Каньон на закате", location: "США" },
];

const stats = [
  { value: "15+", label: "лет опыта", icon: "Award" },
  { value: "1000+", label: "учеников", icon: "GraduationCap" },
  { value: "12", label: "стран посетил", icon: "Plane" },
  { value: "50+", label: "открытых уроков", icon: "Lightbulb" },
];

const Index = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="flex items-center gap-2 text-primary font-heading font-bold text-lg">
              <Icon name="Globe" size={28} />
              <span className="hidden sm:inline">ГеоМир</span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              <Icon name={mobileMenu ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {mobileMenu && (
          <div className="md:hidden border-t bg-white/95 backdrop-blur-md">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                >
                  <Icon name={link.icon} size={18} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Земля из космоса" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-32">
          <div className="max-w-2xl">
            <Badge className="mb-6 bg-primary/20 text-white border-primary/30 text-sm px-4 py-1.5">
              🌍 Учитель географии высшей категории
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Откройте мир
              <span className="block text-primary-foreground/80 mt-2" style={{ color: "hsl(168, 55%, 60%)" }}>
                вместе со мной
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed max-w-lg">
              География — это не просто предмет, а путешествие по удивительным уголкам нашей планеты
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2 text-base px-6" asChild>
                <a href="#lessons">
                  <Icon name="BookOpen" size={20} />
                  Смотреть уроки
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 gap-2 text-base px-6" asChild>
                <a href="#contacts">
                  <Icon name="Send" size={20} />
                  Связаться
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white/60 hover:text-white transition-colors">
            <Icon name="ChevronDown" size={32} />
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 -mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardContent className="p-5 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={stat.icon} size={24} className="text-primary" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={TEACHER_IMG} alt="Учитель географии" className="w-full aspect-[4/5] object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary rounded-full -z-10" />
            </div>
            <div>
              <Badge className="mb-4 bg-secondary text-secondary-foreground">О преподавателе</Badge>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-6">
                Иванов Пётр Сергеевич
              </h2>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  Учитель географии высшей квалификационной категории с более чем 15-летним стажем работы.
                  Выпускник географического факультета МГУ имени М.В. Ломоносова.
                </p>
                <p>
                  Убеждён, что лучший способ изучать географию — это путешествовать. Побывал в 12 странах мира,
                  и каждое путешествие находит отражение в моих уроках.
                </p>
                <p>
                  Победитель конкурса «Учитель года» в 2019 году. Автор методических пособий по интерактивному
                  преподаванию географии.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                {["МГУ им. Ломоносова", "Высшая категория", "Учитель года 2019"].map((tag) => (
                  <Badge key={tag} variant="outline" className="px-3 py-1.5 text-sm border-primary/30 text-primary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons */}
      <section id="lessons" className="py-24 px-4 sm:px-6 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Программа обучения</Badge>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">Мои уроки</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Увлекательные занятия для учеников разных классов с использованием интерактивных методов
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lessons.map((lesson) => (
              <Card key={lesson.title} className="group bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon name={lesson.icon} size={24} className="text-primary" />
                    </div>
                    <Badge variant="outline" className="text-xs">{lesson.grade}</Badge>
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2">{lesson.title}</h3>
                  <p className="text-sm text-muted-foreground">{lesson.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section id="materials" className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Ресурсы</Badge>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">Учебные материалы</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Полезные материалы для подготовки к урокам и экзаменам
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {materials.map((mat) => (
              <Card key={mat.title} className="group border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon name={mat.icon} size={22} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate">{mat.title}</h3>
                    <Badge className={`mt-1 text-xs ${mat.color} border-0`}>{mat.type}</Badge>
                  </div>
                  <Icon name="Download" size={18} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 px-4 sm:px-6 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Фотоархив</Badge>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">Галерея путешествий</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Фотографии из поездок по удивительным уголкам планеты
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryPhotos.map((photo, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                  i === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
                onClick={() => setLightbox(i)}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    i === 0 ? "aspect-square" : "aspect-square"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold text-sm">{photo.title}</p>
                  <p className="text-white/70 text-xs flex items-center gap-1 mt-1">
                    <Icon name="MapPin" size={12} />
                    {photo.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={lightbox !== null} onOpenChange={() => setLightbox(null)}>
        <DialogContent className="max-w-4xl p-0 border-0 bg-black/95 overflow-hidden">
          <DialogTitle className="sr-only">
            {lightbox !== null ? galleryPhotos[lightbox].title : "Фото"}
          </DialogTitle>
          {lightbox !== null && (
            <div className="relative">
              <img
                src={galleryPhotos[lightbox].src}
                alt={galleryPhotos[lightbox].title}
                className="w-full max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-heading font-bold text-lg">{galleryPhotos[lightbox].title}</p>
                <p className="text-white/70 text-sm flex items-center gap-1 mt-1">
                  <Icon name="MapPin" size={14} />
                  {galleryPhotos[lightbox].location}
                </p>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 flex justify-between pointer-events-none">
                {lightbox > 0 && (
                  <button
                    onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }}
                    className="pointer-events-auto w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <Icon name="ChevronLeft" size={20} />
                  </button>
                )}
                <div />
                {lightbox < galleryPhotos.length - 1 && (
                  <button
                    onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}
                    className="pointer-events-auto w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <Icon name="ChevronRight" size={20} />
                  </button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Contacts */}
      <section id="contacts" className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Обратная связь</Badge>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">Контакты</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold mb-2">Email</h3>
                <p className="text-muted-foreground text-sm">geo.teacher@mail.ru</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold mb-2">Телефон</h3>
                <p className="text-muted-foreground text-sm">+7 (999) 123-45-67</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold mb-2">Адрес</h3>
                <p className="text-muted-foreground text-sm">г. Москва, ул. Школьная, 15</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-heading font-bold text-xl text-center mb-6">Написать сообщение</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    />
                  </div>
                  <textarea
                    placeholder="Ваше сообщение..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                  />
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white gap-2" size="lg">
                    <Icon name="Send" size={18} />
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white/70 py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-white font-heading font-bold text-lg">
              <Icon name="Globe" size={24} />
              ГеоМир
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-sm">© 2025 Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
