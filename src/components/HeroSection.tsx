import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "@/assets/favaios-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Vista aérea de Favaios, Vale do Douro"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold font-display text-sm tracking-[0.3em] uppercase mb-6"
        >
          Registos de Óbitos · 1926–1940
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight mb-6"
        >
          Os Falecidos
          <br />
          <span className="italic font-semibold">de Favaios</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10"
        >
          Honrando a memória dos que partiram — registos de óbitos da paróquia
          de Favaios, Alto Douro, entre 1926 e 1940.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 gap-4 max-w-lg mx-auto"
        >
          <Link
            to="/registos"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-display text-sm tracking-wider uppercase rounded-sm hover:bg-wine-light transition-colors"
          >
            Explorar Registos
          </Link>
          <Link
            to="/contexto"
            className="inline-flex items-center justify-center px-8 py-3 border border-primary-foreground/40 text-primary-foreground font-display text-sm tracking-wider uppercase rounded-sm hover:bg-primary-foreground/10 transition-colors"
          >
            Contexto Histórico
          </Link>
          <Link
            to="/linha-do-tempo"
            className="inline-flex items-center justify-center px-8 py-3 border border-primary-foreground/40 text-primary-foreground font-display text-sm tracking-wider uppercase rounded-sm hover:bg-primary-foreground/10 transition-colors"
          >
            Linha do Tempo
          </Link>
          <Link
            to="/sobre"
            className="inline-flex items-center justify-center px-8 py-3 border border-primary-foreground/40 text-primary-foreground font-display text-sm tracking-wider uppercase rounded-sm hover:bg-primary-foreground/10 transition-colors"
          >
            Sobre o Projeto
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 border-2 border-primary-foreground/40 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-primary-foreground/60 rounded-full mt-1.5"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
