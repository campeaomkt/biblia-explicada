import { 
  Check, 
  ShieldCheck, 
  Lock, 
  Zap, 
  ChevronDown, 
  Star, 
  BookOpen, 
  Clock, 
  Download,
  AlertCircle,
  HelpCircle,
  Mail,
  Smartphone,
  CheckCircle2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

// --- Components ---

const SectionTitle = ({ children, subtitle, light = false }: { children: React.ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="text-center mb-16 px-4">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-5xl font-serif mb-4 ${light ? 'text-white' : 'text-neutral-900'}`}
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-lg md:text-xl ${light ? 'text-white/80' : 'text-neutral-500'} max-w-2xl mx-auto`}
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 64 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="h-1 bg-brand-gold mx-auto mt-6"
    />
  </div>
);

const PriceTag = ({ original, current }: { original: string, current: string }) => (
  <div className="flex flex-col items-center">
    <span className="text-neutral-500 line-through text-lg">de {original} por</span>
    <div className="flex items-start gap-1">
      <span className="text-3xl font-bold mt-1 text-brand-green">R$</span>
      <span className="text-6xl md:text-7xl font-bold tracking-tighter text-brand-green">{current.split(',')[0]}</span>
      <span className="text-2xl font-bold mt-2 text-brand-green">,{current.split(',')[1]}</span>
    </div>
  </div>
);

const CTAButton = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`w-full max-w-md bg-brand-emerald text-white py-5 px-8 rounded-xl font-bold text-lg md:text-xl shadow-xl shadow-brand-emerald/20 flex items-center justify-center gap-3 hover:bg-brand-green transition-colors ${className}`}
  >
    {children}
  </motion.button>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-brand-gold/20 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-neutral-800 group-hover:text-brand-gold transition-colors">{question}</span>
        <ChevronDown className={`w-5 h-5 text-brand-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-neutral-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-brand-cream selection:bg-brand-gold/30">
      {/* --- Top Trust Bar --- */}
      <div className="bg-brand-green text-white py-2 px-4 text-center text-sm font-medium flex items-center justify-center gap-2">
        <ShieldCheck className="w-4 h-4 text-brand-gold" />
        Compra 100% Segura e Protegida • Garantia de 7 Dias
      </div>

      {/* --- Header Section --- */}
      <header className="container mx-auto px-4 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 inline-block bg-brand-gold/10 text-brand-gold px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase"
        >
          O GUIA DEFINITIVO PARA ENTENDER A PALAVRA
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-neutral-900 leading-tight mb-8"
        >
          A Bíblia Explicada <br className="hidden md:block" />
          <span className="italic text-brand-gold">Versículo por Versículo</span>
        </motion.h1>
        
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Principal Mockup Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl mb-12"
          >
            <img 
              src="https://i.ibb.co/DDKF4s4X/ex-mockup-pv.webp" 
              alt="Bíblia Explicada Mockup"
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-2xl text-neutral-600 mb-10 max-w-4xl leading-relaxed"
          >
            Entenda <span className="text-brand-green font-bold">os livros da Bíblia</span> com explicações claras, <span className="text-brand-gold font-bold italic">versículo por versículo</span> e sem complicações teológicas para você entender de forma clara a Palavra.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
            <PriceTag original="R$ 97,90" current="47,90" />
            <CTAButton>SIM! QUERO RECEBER O MATERIAL AGORA</CTAButton>
            <p className="text-neutral-400 text-sm flex items-center gap-2">
              <Zap className="w-4 h-4" /> Você recebe tudo no seu e-mail, WhatsApp ou no seu app
            </p>
          </motion.div>
        </div>

        {/* Security / Trust icons */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="flex flex-col items-center gap-1">
             <ShieldCheck className="w-8 h-8" />
             <span className="text-[10px] font-bold uppercase mt-1">Satisfação Garantida</span>
          </div>
          <div className="flex flex-col items-center gap-1">
             <Lock className="w-8 h-8" />
             <span className="text-[10px] font-bold uppercase mt-1">Compra Segura</span>
          </div>
          <div className="flex flex-col items-center gap-1">
             <Zap className="w-8 h-8" />
             <span className="text-[10px] font-bold uppercase mt-1">Acesso Imediato</span>
          </div>
          <div className="flex flex-col items-center gap-1">
             <Smartphone className="w-8 h-8" />
             <span className="text-[10px] font-bold uppercase mt-1">App Exclusivo</span>
          </div>
        </div>
      </header>

      {/* --- Social Proof Section --- */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          {/* Header Image for Testimonials */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-[280px] md:max-w-4xl mx-auto mb-2 md:mb-16"
          >
            <img 
              src="https://i.ibb.co/KjXjLGw7/img-depoimento.webp" 
              alt="Depoimentos" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <SectionTitle subtitle="Veja o que dizem aqueles que já transformaram seu entendimento bíblico">
            Depoimentos Reais
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-2xl relative"
              >
                <div className="flex text-brand-gold mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-neutral-600 mb-6 italic leading-relaxed">
                  "Sempre tive dificuldade de entender as cartas de Paulo. Com esse material, parece que as escamas caíram dos meus olhos. Explicado de uma forma que qualquer um entende."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center font-bold text-brand-gold">
                    {i === 1 ? 'MA' : i === 2 ? 'RS' : 'JL'}
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900">{i === 1 ? 'Maria Augusta' : i === 2 ? 'Rodrigo Silva' : 'José Leandro'}</h4>
                    <p className="text-xs text-neutral-400">Aluno há 3 meses</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Content Showcase --- */}
      <section className="py-24 bg-brand-cream/50">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Uma amostra do material rico que você terá em suas mãos">
            Amostra do Material
          </SectionTitle>

          <div className="space-y-24">
            {[
              { title: "Livro de Salmos", desc: "Explicado Versículo por Versículo" },
              { title: "As 13 Cartas de Paulo", desc: "Explicado Versículo por Versículo" },
              { title: "O Livro de Provérbios", desc: "Explicado Versículo por Versículo" }
            ].map((book, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-serif mb-2">{book.title}</h3>
                  <p className="text-brand-gold italic font-medium mb-6">{book.desc}</p>
                  <p className="text-neutral-600 leading-relaxed mb-8">
                    Tenha acesso a uma exegese simplificada mas profunda. Cada verso é analisado contextualmente, trazendo à luz o significado original e a aplicação prática para os dias de hoje.
                  </p>
                  <ul className="space-y-3 inline-block text-left">
                    <li className="flex items-center gap-2 text-neutral-700">
                      <CheckCircle2 className="w-5 h-5 text-brand-emerald" />
                      Linguagem de fácil compreensão
                    </li>
                    <li className="flex items-center gap-2 text-neutral-700">
                      <CheckCircle2 className="w-5 h-5 text-brand-emerald" />
                      Contextualização histórica inclusa
                    </li>
                    <li className="flex items-center gap-2 text-neutral-700">
                      <CheckCircle2 className="w-5 h-5 text-brand-emerald" />
                      Acesso PDF e online vitalício
                    </li>
                  </ul>
                </div>
                <div className="flex-1 w-full max-w-lg aspect-[4/3] bg-white rounded-3xl shadow-xl border border-brand-gold/10 overflow-hidden group">
                  <div className="w-full h-full bg-brand-green/5 p-4 flex items-center justify-center">
                    <div className="w-full h-full border border-dashed border-brand-gold/30 rounded-2xl flex items-center justify-center flex-col gap-4 group-hover:scale-105 transition-transform duration-500">
                      <BookOpen className="w-12 h-12 text-brand-gold/30" />
                      <span className="text-xs uppercase tracking-tighter text-brand-gold font-bold">Página de Amostra - {book.title}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <CTAButton className="mx-auto">QUERO MEU ACESSO AGORA</CTAButton>
          </div>
        </div>
      </section>

      {/* --- Emotional Hook Section --- */}
      <section className="bg-brand-green py-24 text-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <SectionTitle light subtitle="Chega de frustração ao ler as sagradas escrituras">
            Pare de ler a Bíblia <br /> Sem entender o que está escrito.
          </SectionTitle>
          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
              Talvez você já tenha se sentido frustrado ao ler um versículo e pensar: <br />
              <span className="italic font-normal">"Eu não sei o que isso quis dizer..."</span>
            </p>
            <p className="text-lg md:text-xl text-brand-gold italic">
              Mas quando você tem a explicação de cada versículo... <br className="hidden md:block" />
              A Bíblia deixa de ser difícil e se torna um prazer.
            </p>
            <CTAButton className="mx-auto !bg-white !text-brand-green hover:!bg-brand-gold hover:!text-white">
              Quero a Bíblia Explicada agora
            </CTAButton>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
           <div className="absolute top-10 left-10 w-96 h-96 rounded-full border-2 border-white" />
           <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full border-2 border-white" />
        </div>
      </section>

      {/* --- Benefits Grid --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Para quem este material foi cuidadosamente preparado">
            Ideal Para Você Que Deseja...
          </SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Entender cada versículo com clareza", icon: CheckCircle2 },
              { title: "Estudar livros difíceis sem medo", icon: Zap },
              { title: "Ter um dicionário prático sempre à mão", icon: BookOpen },
              { title: "Aplicar a Palavra no seu dia a dia", icon: Star },
              { title: "Crescer espiritualmente com mais confiança", icon: ShieldCheck },
              { title: "Acesso Imediato pelo Celular ou Tablet", icon: Smartphone }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-brand-cream/30 hover:bg-brand-cream transition-colors border border-transparent hover:border-brand-gold/10"
              >
                <item.icon className="w-8 h-8 text-brand-gold flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-neutral-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-neutral-500">Desenvolvido para facilitar sua jornada de fé com excelência e profundidade.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Bundle List --- */}
      <section className="bg-brand-cream py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-brand-green rounded-[40px] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden">
             {/* Abstract background detail */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl" />
             
             <div className="relative z-10 text-center mb-16">
               <span className="text-brand-gold uppercase tracking-widest font-bold text-sm">Acesso Imediato</span>
               <h2 className="text-4xl md:text-6xl font-serif mt-4">Tudo o que você vai receber hoje:</h2>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-16">
               {[
                 "Pentateuco (Gênesis a Deuteronômio)",
                 "Evangelhos (Mateus, Marcos, Lucas e João)",
                 "Atos dos Apóstolos",
                 "As 13 Cartas de Paulo",
                 "Os 150 Salmos Explicados",
                 "Os 31 Provérbios Explicados",
                 "Apocalipse Versículo por Versículo"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 border-b border-white/10 pb-4">
                   <div className="w-6 h-6 rounded-full bg-brand-gold flex items-center justify-center flex-shrink-0">
                     <Check className="w-4 h-4 text-brand-green" />
                   </div>
                   <span className="text-lg font-medium">{item}</span>
                 </div>
               ))}
             </div>

             <div className="text-center bg-white/5 p-8 rounded-3xl border border-white/10">
               <p className="text-xl font-serif italic text-brand-gold mb-2">E não para por aí... Tem Mais!</p>
               <h3 className="text-2xl font-bold">Você ainda receberá 4 BÔNUS EXCLUSIVOS</h3>
             </div>
          </div>
        </div>
      </section>

      {/* --- Bonuses Section --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Presentes especiais para quem agir agora">
            Estes Bônus Valem Ouro
          </SectionTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Plano de Estudo Bíblico (90 Dias)", icon: Clock },
              { title: "Método de Estudo Bíblico Aplicado", icon: Zap },
              { title: "Caderno de Anotações Premium (PDF)", icon: Download },
              { title: "Glossário Bíblico Simplificado", icon: HelpCircle }
            ].map((bonus, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-cream/50 p-8 rounded-3xl border-2 border-dashed border-brand-gold/30 flex flex-col items-center text-center group hover:bg-brand-cream hover:border-brand-gold transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-gold group-hover:text-white transition-all">
                  <bonus.icon className="w-8 h-8 text-brand-gold group-hover:text-white" />
                </div>
                <h4 className="text-lg font-bold text-neutral-900 mb-2">BÔNUS #{i+1}</h4>
                <p className="font-serif italic text-brand-gold mb-4">{bonus.title}</p>
                <div className="text-xs uppercase font-bold tracking-widest text-neutral-400">Totalmente Grátis</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Final Checkout Area --- */}
      <section className="py-24 bg-brand-cream relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto glass-card flex flex-col items-center p-12 md:p-20 rounded-[40px] text-center shadow-2xl overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-2 bg-brand-gold" />
             <div className="mb-6 bg-red-100 text-red-600 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <AlertCircle className="w-4 h-4" /> Oferta por Tempo Limitado
             </div>
             
             <h2 className="text-4xl md:text-6xl font-serif text-neutral-900 mb-4">Aproveite Agora!</h2>
             <p className="text-neutral-500 mb-12 text-lg">
               Sua compra é vitalícia. Pague uma vez e acesse para sempre <br className="hidden md:block" /> em qualquer dispositivo.
             </p>

             <div className="mb-12">
               <PriceTag original="R$ 97,90" current="47,90" />
               <p className="text-sm font-medium text-brand-gold mt-2">ou até 6x de R$ 8,83 no cartão</p>
             </div>

             <CTAButton>GARANTIR MEU ACESSO VITALÍCIO</CTAButton>
             
             <div className="mt-8 flex flex-wrap justify-center gap-4 opacity-40">
                <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-8" />
                <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="h-8" />
                <img src="https://img.icons8.com/color/48/pix.png" alt="PIX" className="h-8" />
                <img src="https://img.icons8.com/color/48/boleto_bank_slips.png" alt="Boleto" className="h-8" />
             </div>
          </div>
        </div>
      </section>

      {/* --- Warranty Section --- */}
      <section className="py-24 bg-white border-y border-brand-gold/10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-brand-gold/20 blur-3xl transform group-hover:scale-110 transition-transform duration-700" />
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-brand-gold flex items-center justify-center flex-col text-center p-4 bg-white shadow-2xl">
               <span className="text-brand-gold text-sm font-bold uppercase tracking-widest">Garantia de</span>
               <span className="text-7xl md:text-9xl font-serif font-black text-brand-gold -my-2">7</span>
               <span className="text-xl font-bold text-neutral-900 uppercase">Dias</span>
            </div>
          </div>
          <div className="max-w-2xl text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-serif mb-6 text-neutral-900">Satisfação Garantida ou seu dinheiro de volta</h3>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              O risco é todo meu. Se dentro de 7 dias você sentir que o material não é para você, basta entrar em contato e eu devolvo 100% do seu investimento. Sem perguntas, sem burocracia.
            </p>
            <div className="flex items-center gap-2 text-brand-emerald font-bold">
               <ShieldCheck className="w-6 h-6" />
               Sua jornada com segurança total
            </div>
          </div>
        </div>
      </section>

      {/* --- Steps Section --- */}
      <section className="py-24 bg-brand-cream/50">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Passo a passo para começar seus estudos ainda hoje">
            Como funciona o acesso?
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              { title: "Realize sua compra", desc: "Acesse a página segura e escolha sua forma de pagamento preferida.", icon: Zap },
              { title: "Acesse seu e-mail", desc: "Assim que o pagamento for confirmado, você recebe o link de acesso imediato.", icon: Mail },
              { title: "Comece a Aprender", desc: "Abra em seu celular, tablet ou computador e mergulhe na Palavra.", icon: BookOpen }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-full border-2 border-brand-gold flex items-center justify-center text-brand-gold font-bold mb-6 group-hover:bg-brand-gold group-hover:text-white transition-all">
                   {i + 1}
                </div>
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-neutral-400 group-hover:text-brand-gold transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-2">{step.title}</h4>
                <p className="text-neutral-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionTitle subtitle="Dúvidas comuns sobre o material e o acesso">
            Perguntas Frequentes
          </SectionTitle>
          <div className="space-y-2">
            {[
              { q: "O material é realmente versículo por versículo?", a: "Sim! Cada capítulo de cada livro incluído é analisado verso a verso para que não reste dúvidas." },
              { q: "O acesso é vitalício?", a: "Sim. Ao adquirir hoje, você terá acesso para sempre, incluindo todas as atualizações futuras do material." },
              { q: "Receborei algo físico em casa?", a: "Não. Este é um material 100% digital, o que garante acesso imediato e a possibilidade de ler em qualquer lugar pelo celular." },
              { q: "Quais são as formas de pagamento?", a: "Cartão de crédito (com parcelamento), PIX com liberação imediata e Boleto Bancário." },
              { q: "É seguro comprar neste site?", a: "Totalmente. Utilizamos os protocolos de segurança mais avançados do mercado para proteger seus dados e sua transação." }
            ].map((item, i) => (
              <FAQItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-brand-green py-16 text-white/60 text-center text-sm">
        <div className="container mx-auto px-4">
           <div className="mb-8 flex justify-center gap-8 text-white/80 font-medium">
              <a href="#" className="hover:text-brand-gold transition-colors">Políticas de Privacidade</a>
              <a href="#" className="hover:text-brand-gold transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-brand-gold transition-colors">Suporte</a>
           </div>
           <p className="max-w-2xl mx-auto leading-loose mb-8">
             &copy; 2026 Bíblia Versículo por Versículo. Todos os direitos reservados. Este site não é afiliado ao Facebook ou a qualquer outra rede social.
           </p>
           <div className="w-12 h-px bg-white/20 mx-auto" />
        </div>
      </footer>
    </div>
  );
}
