import { motion } from "framer-motion";
import { Baby, Heart, Cross } from "lucide-react";

const categories = [
  {
    icon: Baby,
    title: "Nascimentos",
    description:
      "Registos de baptismo com nomes dos pais, padrinhos, datas e localidades de nascimento.",
    period: "1926 – 1940",
  },
  {
    icon: Heart,
    title: "Casamentos",
    description:
      "Uniões matrimoniais com identificação dos noivos, testemunhas e naturalidade.",
    period: "1926 – 1940",
  },
  {
    icon: Cross,
    title: "Óbitos",
    description:
      "Registos de falecimento com idade, causa de morte, estado civil e local de sepultura.",
    period: "1926 – 1940",
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
            Categorias
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Tipos de Registos
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
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
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                {cat.description}
              </p>
              <p className="font-display text-xs tracking-widest uppercase text-gold">
                {cat.period}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
