import { motion } from "framer-motion";
import { User, MapPin, FileText, Skull } from "lucide-react";

const categories = [
  {
    icon: User,
    title: "Identificação",
    description:
      "Nome completo, idade, estado civil, profissão e filiação do falecido.",
  },
  {
    icon: Skull,
    title: "Causa de Morte",
    description:
      "Patologia ou circunstância do falecimento, conforme registado pelo pároco.",
  },
  {
    icon: MapPin,
    title: "Origem e Sepultura",
    description:
      "Naturalidade, local de residência e cemitério onde foi sepultado.",
  },
  {
    icon: FileText,
    title: "Detalhes do Registo",
    description:
      "Data do falecimento, data do registo, nome do pároco e testemunhas presentes.",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-display text-sm tracking-[0.3em] uppercase mb-4">
            Dados Disponíveis
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            O que cada Registo Contém
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group p-8 bg-background border border-border rounded-sm hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-sm mb-6 group-hover:bg-primary/20 transition-colors">
                <cat.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {cat.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {cat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
