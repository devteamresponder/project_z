import { Wrench, ArrowLeft, Lightbulb, Layers, Wind, Droplets, Wrench as WrenchIcon, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logoZe from '@/assets/logo-ze.png';

const portfolioCategories = [
  {
    id: 'iluminacao', 
    title: 'Instalações de Iluminação',
    description: 'Spots, lustres, arandelas e sistemas LED modernos',
    icon: Lightbulb,
    projects: [
      {
        title: 'Sistema LED Residencial',
        description: 'Instalação completa de fita LED e spots embutidos',
        image: 'https://res.cloudinary.com/dsglxaxak/image/upload/v1755021256/Design_sem_nome_67_vvnqwd.png',
      },
      {
        title: 'Lustres e Pendentes',
        description: 'Instalação de lustres decorativos e pendentes modernos',
        image: 'https://res.cloudinary.com/dsglxaxak/image/upload/v1755021256/Design_sem_nome_40_mnasrz.png',
      },
      {
        title: 'Spots Embutidos',
        description: 'Sistema de spots direcionais para realçar ambientes',
        image: 'https://res.cloudinary.com/dsglxaxak/image/upload/v1755021254/Design_sem_nome_45_gj337d.png',
      },
      {
        title: 'Arandelas Decorativas',
        description: 'Iluminação indireta com arandelas de parede',
        image: 'https://res.cloudinary.com/dsglxaxak/image/upload/v1755021253/Design_sem_nome_44_dwgkva.png',
      },
      {
        title: 'Iluminação de Ambiente',
        description: 'Projeto completo de iluminação para sala de estar',
        image: 'https://res.cloudinary.com/dsglxaxak/image/upload/v1755021251/Design_sem_nome_43_b5p3hb.png',
      },
      {
        title: 'Sistema Integrado',
        description: 'Combinação de diferentes tipos de iluminação',
        image: 'https://res.cloudinary.com/dsglxaxak/image/upload/v1755021251/Design_sem_nome_42_m6puzu.png',
      },
    ]
  },
  {
    id: 'pisos-paineis',
    title: 'Pisos Laminados e Painéis',
    description: 'Instalação de pisos laminados e painéis decorativos de alta qualidade',
    icon: Layers,
    projects: [
      {
        title: 'Piso Laminado Premium',
        description: 'Instalação de piso laminado de alta resistência',
        image: 'https://res.cloudinary.com/dsglxaxak/image/upload/v1755021260/Design_sem_nome_56_spjmja.png',
      },
      {
        title: 'Painéis Decorativos',
        description: 'Painéis de parede com acabamento moderno',
        image: 'https://res.cloudinary.com/dsglxaxak/image/upload/v1755021254/Design_sem_nome_60_jxpwh3.png',
      },
      {
        title: 'Piso Vinílico Residencial',
        description: 'Aplicação de piso vinílico em dormitório',
        image: 'https://res.cloudinary.com/dsglxaxak/image/upload/v1755021254/Design_sem_nome_63_hy99lg.png',
      },
      {
        title: 'Acabamento em Madeira',
        description: 'Instalação de painéis com textura de madeira natural',
        image: 'https://res.cloudinary.com/dsglxaxak/image/upload/v1755021253/Design_sem_nome_64_ke9pqq.png',
      },
      {
        title: 'Piso Laminado Sala',
        description: 'Renovação completa do piso da sala de estar',
        image: 'https://res.cloudinary.com/dsglxaxak/image/upload/v1755021253/Design_sem_nome_62_baqozj.png',
      },
      {
        title: 'Combinação Piso e Painel',
        description: 'Projeto integrado de piso e painéis decorativos',
        image: 'https://res.cloudinary.com/dsglxaxak/image/upload/v1755021253/Design_sem_nome_59_wjgdh7.png',
      },
      {
        title: 'Acabamento Profissional',
        description: 'Detalhes de acabamento e rodapés',
        image: 'https://res.cloudinary.com/dsglxaxak/image/upload/v1755021251/Design_sem_nome_58_w9naeb.png',
      },
      {
        title: 'Piso Laminado Quarto',
        description: 'Instalação em dormitório com acabamento perfeito',
        image: 'https://res.cloudinary.com/dsglxaxak/image/upload/v1755021252/Design_sem_nome_61_udexri.png',
      },
      {
        title: 'Projeto Completo',
        description: 'Transformação completa do ambiente',
        image: 'https://res.cloudinary.com/dsglxaxak/image/upload/v1755021251/Design_sem_nome_57_nbtack.png',
      },
    ]
  },
  {
    id: 'coifas-churrasqueiras',
    title: 'Coifas e Churrasqueiras',
    description: 'Instalação de coifas industriais e sistemas de exaustão',
    icon: Wind,
    projects: [
      {
        title: 'Coifa Industrial Cozinha',
        description: 'Sistema completo de exaustão para cozinha comercial',
        image: 'https://res.cloudinary.com/dsglxaxak/image/upload/v1755021254/Design_sem_nome_47_j9cftf.png',
      },
      {
        title: 'Coifa Residencial Premium',
        description: 'Instalação de coifa moderna para área gourmet',
        image: 'https://res.cloudinary.com/dsglxaxak/image/upload/v1755021532/Design_sem_nome_40_2_amsuiu.png',
      },
      {
        title: 'Sistema de Exaustão',
        description: 'Coifa com dutos e sistema de ventilação completo',
        image: 'https://res.cloudinary.com/dsglxaxak/image/upload/v1755021253/Design_sem_nome_46_gviumn.png',
      },
    ]
  },
  {
    id: 'bancadas-hidraulicos',
    title: 'Bancadas e Hidráulicos',
    description: 'Instalação de bancadas, pias, nichos e componentes hidráulicos',
    icon: Droplets,
    projects: [
      {
        title: 'Bancada de Granito',
        description: 'Instalação de bancada com pia e torneira moderna',
        image: 'https://res.cloudinary.com/dsglxaxak/image/upload/v1755021257/Design_sem_nome_55_tyexck.png',
      },
      {
        title: 'Bancada Banheiro Premium',
        description: 'Bancada suspensa com cuba de apoio',
        image: 'https://res.cloudinary.com/dsglxaxak/image/upload/v1755021257/Design_sem_nome_51_pxzbdd.png',
      },
      {
        title: 'Nicho com Iluminação',
        description: 'Nicho embutido com sistema de LED integrado',
        image: 'https://res.cloudinary.com/dsglxaxak/image/upload/v1755021257/Design_sem_nome_52_zb65vz.png',
      },
      {
        title: 'Bancada Cozinha',
        description: 'Bancada com cooktop e sistema hidráulico',
        image: 'https://res.cloudinary.com/dsglxaxak/image/upload/v1755021255/Design_sem_nome_48_r2utp8.png',
      },
      {
        title: 'Banheira de Hidromassagem',
        description: 'Instalação completa com sistema hidráulico',
        image: 'https://res.cloudinary.com/dsglxaxak/image/upload/v1755021257/Design_sem_nome_50_ujlz4q.png',
      },
      {
        title: 'Bancada Dupla',
        description: 'Sistema com duas cubas e torneiras independentes',
        image: 'https://res.cloudinary.com/dsglxaxak/image/upload/v1755021257/Design_sem_nome_53_pmfzuk.png',
      },
      {
        title: 'Pia de Apoio Moderna',
        description: 'Cuba moderna com sistema de drenagem eficiente',
        image: 'https://res.cloudinary.com/dsglxaxak/image/upload/v1755021255/Design_sem_nome_49_jqzikn.png',
      },
    ]
  },
  {
    id: 'hidrossanitarias',
    title: 'Instalações Hidrossanitárias',
    description: 'Sistemas completos de água, esgoto e tubulações',
    icon: WrenchIcon,
    projects: [
      {
        title: 'Sistema Completo Residencial',
        description: 'Instalação completa de tubulações e conexões',
        image: 'https://res.cloudinary.com/dsglxaxak/image/upload/v1755021256/Design_sem_nome_66_pgarzf.png',
      },
      {
        title: 'Rede Hidráulica Industrial',
        description: 'Sistema robusto para aplicação comercial',
        image: 'https://res.cloudinary.com/dsglxaxak/image/upload/v1755021255/Design_sem_nome_65_kwsnsf.png',
      },
    ]
  }
];

export default function PortfolioPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Altura do header fixo
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false); // Fechar menu após clicar
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Menu className="h-6 w-6 text-gray-700" />
            </button>

            <div className="flex items-center space-x-2">
              <img src={logoZe} alt="Logo Ze" className="h-[7rem] max-w-[7rem]" />
            </div>

            <nav className="hidden lg:flex items-center space-x-6">
              {portfolioCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => scrollToSection(category.id)}
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors py-2 px-3 rounded-lg hover:bg-blue-50"
                  >
                    <IconComponent className="h-4 w-4" />
                    <span className="text-sm font-medium">{category.title}</span>
                  </button>
                );
              })}
              <Link 
                to="/" 
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors py-2 px-3 rounded-lg hover:bg-blue-50 ml-4 border-l pl-6"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Voltar</span>
              </Link>
            </nav>
            
            {/* Mobile menu */}
            <div className="lg:hidden">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Mobile Menu Sidebar */}
          <div 
            className="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center space-x-2">
                <img src={logoZe} alt="Logo Ze" className="h-12 w-12" />
                <span className="text-lg font-semibold text-gray-900">Menu</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="h-6 w-6 text-gray-700" />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="p-6 space-y-4">
              {portfolioCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => scrollToSection(category.id)}
                    className="w-full flex items-center space-x-3 text-left p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors group"
                  >
                    <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-blue-100 transition-colors">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 group-hover:text-blue-600">
                        {category.title}
                      </div>
                      <div className="text-sm text-gray-500 group-hover:text-blue-500">
                        {category.description}
                      </div>
                    </div>
                  </button>
                );
              })}
              
              {/* Divider */}
              <div className="border-t pt-4 mt-6">
                <Link 
                  to="/" 
                  className="w-full flex items-center space-x-3 text-left p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <ArrowLeft className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Voltar</div>
                    <div className="text-sm text-gray-500">Página inicial</div>
                  </div>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-44 lg:pt-36 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Trabalhos Realizados</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore nossa galeria de projetos e veja a qualidade e dedicação em cada detalhe de nossas instalações.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Categories */}
      {portfolioCategories.map((category, categoryIndex) => {
        const IconComponent = category.icon;
        return (
          <section 
            key={category.id} 
            id={category.id}
            className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gradient-to-br from-gray-50 to-white'}`}
          >
            <div className="container mx-auto px-4">
              {/* Category Header */}
              <div className="text-center mb-16">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-green-600 rounded-full text-white">
                    <IconComponent className="h-8 w-8" />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.projects.map((project, index) => (
                  <Card
                    key={index}
                    className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white/90 backdrop-blur-sm"
                  >
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Gostou do Nosso Trabalho?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Entre em contato e solicite um orçamento personalizado para seu projeto.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            <Wrench className="h-5 w-5 mr-2" />
            Solicitar Orçamento
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <img src={logoZe} alt="Logo Ze" className="h-[3rem] max-w-[3rem]" />
          </div>
          <p className="text-gray-400 mb-4 text-lg">
            Transformando ambientes com qualidade e profissionalismo desde 2019.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
            {portfolioCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToSection(category.id)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {category.title}
              </button>
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 ServiçosPro. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}