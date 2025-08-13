import { useState, useEffect } from 'react';
import { Wrench, HomeIcon, Lightbulb, Droplets, Package, Layers, Phone, Mail, MapPin, Star, CheckCircle, MessageCircle, Menu, X, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';

const services = [
  { icon: HomeIcon, title: 'Instalação de Coifa', description: 'Instalação profissional de coifas de todos os tipos, garantindo perfeita ventilação e segurança.', features: ['Coifas residenciais', 'Coifas industriais', 'Manutenção', 'Garantia de serviço'] },
  { icon: Layers, title: 'Piso Vinílico', description: 'Instalação de pisos vinílicos com acabamento perfeito e durabilidade garantida.', features: ['Medição precisa', 'Preparação do substrato', 'Instalação profissional', 'Acabamento de qualidade'] },
  { icon: Package, title: 'Nichos e Bancadas', description: 'Assentamento de nichos, bancadas e pias com precisão milimétrica.', features: ['Nichos personalizados', 'Bancadas de mármore', 'Instalação de pias', 'Vedação impermeável'] },
  { icon: Wrench, title: 'Instalação de Painéis', description: 'Instalação de painéis decorativos e funcionais para todos os ambientes.', features: ['Painéis de madeira', 'Painéis decorativos', 'Medidas personalizadas', 'Instalação segura'] },
  { icon: Lightbulb, title: 'Iluminação', description: 'Instalação de luminárias e sistemas de iluminação para valorizar seus ambientes.', features: ['Luminárias LED', 'Spots embutidos', 'Fitas de LED', 'Dimmerizadores'] },
  { icon: Droplets, title: 'Instalações Hidráulicas', description: 'Instalação e manutenção de vasos sanitários e acessórios hidráulicos.', features: ['Vasos sanitários', 'Torneiras e registros', 'Acessórios de banheiro', 'Reparos em geral'] },
];

const portfolio = [
  { title: 'Cozinha Moderna', description: 'Instalação completa de coifa, bancada e iluminação', image: 'https://images.pexels.com/photos/1358900/pexels-photo-1358900.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Banheiro Elegante', description: 'Nicho, piso vinílico e instalações hidráulicas', image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Sala de Estar', description: 'Painéis decorativos e sistema de iluminação', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Área Gourmet', description: 'Piso vinílico e instalação de coifa industrial', image: 'https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

// Imagens do carrossel de construção
const carouselImages = [
  'https://images.pexels.com/photos/1358900/pexels-photo-1358900.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-design-159045.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/276651/pexels-photo-276651.jpeg?auto=compress&cs=tinysrgb&w=1920'
];

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  // Carrossel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Tenho interesse no serviço de ${formData.service}. 
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Mensagem: ${formData.message}`;
    const whatsappUrl = `https://wa.me/5537999614569?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="relative z-0 min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
            <div className="flex items-center space-x-2">
              <img src="/assets/logo-ze.png" alt="Logo Ze" className="h-[7rem] max-w-[7rem]" />
            </div>
            <nav className="hidden lg:flex items-center space-x-6">
              <button onClick={() => scrollToSection('inicio')} className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors py-2 px-3 rounded-lg hover:bg-blue-50">
                <HomeIcon className="h-4 w-4" /><span className="text-sm font-medium">Início</span>
              </button>
              <button onClick={() => scrollToSection('servicos')} className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors py-2 px-3 rounded-lg hover:bg-blue-50">
                <Wrench className="h-4 w-4" /><span className="text-sm font-medium">Serviços</span>
              </button>
              <Link to="/portfolio" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors py-2 px-3 rounded-lg hover:bg-blue-50">
                <Wrench className="h-4 w-4" /><span className="text-sm font-medium">Portfólio</span>
              </Link>
              <button onClick={() => scrollToSection('contato')} className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors py-2 px-3 rounded-lg hover:bg-blue-50">
                <Mail className="h-4 w-4" /><span className="text-sm font-medium">Contato</span>
              </button>
              <Link to="/" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors py-2 px-3 rounded-lg hover:bg-blue-50 ml-4 border-l pl-6">
                <ArrowLeft className="h-4 w-4" /><span>Voltar</span>
              </Link>
            </nav>
            <div className="lg:hidden">
              <a href="https://wa.me/5537999614569">
                <Button className="bg-green-600 hover:bg-green-700">
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-gray-900/70 z-[10000] h-screen lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {/* Mobile Menu Sidebar */}
            <div 
              className="fixed left-0 top-0 w-80 bg-white shadow-2xl z-[10001] h-screen overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b">
                <div className="flex items-center space-x-2">
                  <img src="/assets/logo-ze.png" alt="Logo Ze" className="h-12 w-12" />
                  <span className="text-lg font-semibold text-gray-900">Menu</span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <X className="h-6 w-6 text-gray-700" />
                </button>
              </div>
              <nav className="p-6 space-y-4">
                <button onClick={() => scrollToSection('inicio')} className="w-full flex items-center space-x-3 text-left p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors group">
                  <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-blue-100 transition-colors"><HomeIcon className="h-5 w-5" /></div>
                  <div><div className="font-medium text-gray-900 group-hover:text-blue-600">Início</div><div className="text-sm text-gray-500 group-hover:text-blue-500">Explore nossa página inicial</div></div>
                </button>
                <button onClick={() => scrollToSection('servicos')} className="w-full flex items-center space-x-3 text-left p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors group">
                  <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-blue-100 transition-colors"><Wrench className="h-5 w-5" /></div>
                  <div><div className="font-medium text-gray-900 group-hover:text-blue-600">Serviços</div><div className="text-sm text-gray-500 group-hover:text-blue-500">Veja nossos serviços especializados</div></div>
                </button>
                <Link to="/portfolio" className="w-full flex items-center space-x-3 text-left p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors group" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-blue-100 transition-colors"><Wrench className="h-5 w-5" /></div>
                  <div><div className="font-medium text-gray-900 group-hover:text-blue-600">Portfólio</div><div className="text-sm text-gray-500 group-hover:text-blue-500">Confira nossos trabalhos realizados</div></div>
                </Link>
                <button onClick={() => scrollToSection('contato')} className="w-full flex items-center space-x-3 text-left p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors group">
                  <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-blue-100 transition-colors"><Mail className="h-5 w-5" /></div>
                  <div><div className="font-medium text-gray-900 group-hover:text-blue-600">Contato</div><div className="text-sm text-gray-500 group-hover:text-blue-500">Entre em contato conosco</div></div>
                </button>
                <div className="border-t pt-4 mt-6">
                  <Link to="/" className="w-full flex items-center space-x-3 text-left p-3 rounded-lg hover:bg-gray-50 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="p-2 bg-gray-100 rounded-lg"><ArrowLeft className="h-5 w-5" /></div>
                    <div><div className="font-medium text-gray-900">Voltar</div><div className="text-sm text-gray-500">Página inicial</div></div>
                  </Link>
                </div>
                {/* Filler to ensure full height (optional) */}
                <div className="h-full"></div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section com Carrossel */}
      <section id="inicio" className="relative pt-44 lg:pt-36 pb-16 px-4 overflow-hidden">
        {/* Carrossel de Imagens de Fundo */}
        <div className="absolute inset-0 z-0">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Construção ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay com gradiente para ofuscar */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50/95 via-slate-100/90 to-slate-200/85"></div>
              {/* Overlay adicional para melhor contraste */}
              <div className="absolute inset-0 bg-white/20"></div>
            </div>
          ))}
        </div>

        {/* Indicadores do Carrossel */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-blue-600 scale-125'
                  : 'bg-white/60 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Conteúdo da Hero Section */}
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transforme Sua Casa com <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Qualidade Profissional</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Serviços especializados em instalação de coifas, pisos vinílicos, nichos, bancadas, iluminação e instalações hidráulicas. Qualidade garantida e acabamento impecável.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Phone className="h-4 w-4 mr-2" />Solicitar Orçamento
              </Button>
              <Link to="/portfolio">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                    <Layers className="h-4 w-4 mr-2" />Ver Nossos Trabalhos
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">Mais de 40 anos</div><p className="text-gray-600">Anos de Experiência</p></div>
            <div><div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">Itaúna e Região</div><p className="text-gray-600">Atendimento</p></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Serviços Especializados</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas para sua casa ou empresa, com qualidade profissional e garantia em todos os serviços prestados.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 ml-4">{service.title}</h4>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />{feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Trabalhos Realizados</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Confira alguns dos nossos projetos mais recentes e veja a qualidade do nosso trabalho.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src={project.image} alt={project.title} className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                  <p className="text-gray-200">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Por Que Escolher Nossos Serviços?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4"><Star className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div><h4 className="font-semibold text-gray-900 mb-1">Qualidade Garantida</h4><p className="text-gray-600">Todos os nossos serviços possuem garantia e são executados com materiais de primeira qualidade.</p></div>
                </div>
                <div className="flex items-start space-x-4"><CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div><h4 className="font-semibold text-gray-900 mb-1">Profissionais Qualificados</h4><p className="text-gray-600">Nossa equipe é composta por profissionais experientes e certificados em cada área de atuação.</p></div>
                </div>
                <div className="flex items-start space-x-4"><Phone className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div><h4 className="font-semibold text-gray-900 mb-1">Atendimento Personalizado</h4><p className="text-gray-600">Oferecemos consultoria gratuita e orçamentos detalhados para cada projeto.</p></div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Profissional trabalhando" className="rounded-xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Solicite seu orçamento gratuito e transforme sua casa com nossos serviços profissionais.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-semibold mb-6">Solicite seu Orçamento</h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input name="name" placeholder="Seu nome completo" value={formData.name} onChange={handleInputChange} className="bg-gray-800 border-gray-700 text-white placeholder-gray-400" required />
                <Input name="email" type="email" placeholder="Seu e-mail" value={formData.email} onChange={handleInputChange} className="bg-gray-800 border-gray-700 text-white placeholder-gray-400" required />
                <Input name="phone" placeholder="Seu telefone/WhatsApp" value={formData.phone} onChange={handleInputChange} className="bg-gray-800 border-gray-700 text-white placeholder-gray-400" required />
                <select name="service" value={formData.service} onChange={handleInputChange} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white" required>
                  <option value="">Selecione o serviço desejado</option>
                  <option value="Instalação de Coifa">Instalação de Coifa</option>
                  <option value="Piso Vinílico">Piso Vinílico</option>
                  <option value="Nichos e Bancadas">Nichos e Bancadas</option>
                  <option value="Instalação de Painéis">Instalação de Painéis</option>
                  <option value="Iluminação">Iluminação</option>
                  <option value="Instalações Hidráulicas">Instalações Hidráulicas</option>
                  <option value="Múltiplos Serviços">Múltiplos Serviços</option>
                </select>
                <Textarea name="message" placeholder="Descreva detalhes do seu projeto..." value={formData.message} onChange={handleInputChange} className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 min-h-24" required />
                <Button type="submit" className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
                  <MessageCircle className="h-4 w-4 mr-2" />Enviar via WhatsApp
                </Button>
              </form>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-6">Informações de Contato</h4>
              <div className="space-y-6">
                <div className="flex items-center space-x-4"><Phone className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <div><p className="font-semibold">Telefone/WhatsApp</p><p className="text-gray-300">(37) 99961-4569</p></div>
                </div>
                <div className="flex items-center space-x-4"><Mail className="h-6 w-6 text-blue-500 flex-shrink-0" />
                  <div><p className="font-semibold">E-mail</p><p className="text-gray-300">guimaraesservicos@outlook.com.br</p></div>
                </div>
                <div className="flex items-center space-x-4"><MapPin className="h-6 w-6 text-red-500 flex-shrink-0" />
                  <div><p className="font-semibold">Área de Atendimento</p><p className="text-gray-300">Itaúna e Região</p></div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-gray-800 rounded-lg">
                <h5 className="text-lg font-semibold mb-3">Horário de Atendimento</h5>
                <div className="space-y-2 text-gray-300">
                  <p>Segunda a Sexta: 7h às 18h</p>
                  <p>Sábado: 7h às 12h</p>
                  <p>Domingo: Emergências</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src="/assets/logo-ze.png" alt="Logo Ze" className="h-[3rem] max-w-[3rem]" />
          </div>
          <p className="text-gray-400 mb-4">Transformando ambientes com qualidade e profissionalismo desde 1980.</p>
          <p className="text-gray-500 text-sm">© 2025 José Luiz Guimarães. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a href="https://wa.me/5537999614569" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 animate-pulse">
        <MessageCircle className="h-4 w-4" />
      </a>
    </div>
  );
}