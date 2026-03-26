import { motion } from "framer-motion";
import manuscriptImg from "@/assets/manuscript.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <img
                src={manuscriptImg}
                alt="Manuscrito paroquial de registo de óbitos"
                className="w-full rounded-sm shadow-2xl"
                loading="lazy"
                width={800}
                height={1024}
              />
              <div className="absolute inset-0 border border-gold/20 rounded-sm" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gold font-display text-sm tracking-[0.3em] uppercase mb-4">
              Sobre o Projeto
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Honrar os que <br />
              <span className="italic">já Partiram</span>
            </h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                Os registos de óbitos da paróquia de Favaios, aldeia vinhateira
                do Alto Douro, constituem um testemunho silencioso das vidas que
                moldaram esta comunidade.
              </p>
              <p>
                Este projeto digitaliza e organiza os dados contidos nos livros
                de óbitos da paróquia, abrangendo o período de 1926 a 1940 —
                uma era marcada por epidemias, pobreza rural e profundas
                transformações sociais em Portugal.
              </p>
              <p>
                Cada registo preserva um nome, uma idade, uma causa de morte —
                fragmentos de vidas que merecem ser lembradas. Juntos, revelam
                o retrato de uma comunidade e das suas perdas.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
