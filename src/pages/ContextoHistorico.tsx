import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Wheat, Cross, Wine, Users, Skull } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const timeline: {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    year: "1926",
    title: "Golpe Militar de 28 de Maio",
    description:
      "O golpe militar põe fim à Primeira República Portuguesa, instaurando a Ditadura Nacional. A instabilidade política agrava as condições de vida nas aldeias do Douro, onde a pobreza e o isolamento já eram profundos.",
    icon: <Clock className="w-5 h-5" />,
  },
  {
    year: "1928",
    title: "Salazar no Ministério das Finanças",
    description:
      "António de Oliveira Salazar assume o Ministério das Finanças, iniciando a consolidação do regime autoritário. As políticas de austeridade afetam diretamente as populações rurais, limitando o acesso a cuidados de saúde.",
    icon: <Users className="w-5 h-5" />,
  },
  {
    year: "1929",
    title: "Grande Depressão",
    description:
      "A crise económica mundial atinge Portugal. A queda dos preços do vinho do Porto devastou a economia do Douro. Favaios, terra de Moscatel, viu os rendimentos das famílias diminuírem drasticamente.",
    icon: <Wine className="w-5 h-5" />,
  },
  {
    year: "1932",
    title: "Início do Estado Novo",
    description:
      "Salazar torna-se Presidente do Conselho. O regime corporativista controla a produção vinícola e os preços agrícolas, mantendo os trabalhadores rurais em condições de subsistência.",
    icon: <Users className="w-5 h-5" />,
  },
  {
    year: "1933–1935",
    title: "Epidemias e Mortalidade Infantil",
    description:
      "Surtos de gripe, pneumonia e doenças gastrointestinais provocam picos de mortalidade, especialmente entre crianças e idosos. A ausência de médicos e hospitais nas zonas rurais agrava a situação.",
    icon: <Skull className="w-5 h-5" />,
  },
  {
    year: "1936",
    title: "Guerra Civil Espanhola",
    description:
      "O conflito no país vizinho gera instabilidade na Península Ibérica. Portugal, sob Salazar, apoia os nacionalistas de Franco. A fronteira transmontana torna-se zona de tensão e contrabando.",
    icon: <Clock className="w-5 h-5" />,
  },
  {
    year: "1937–1940",
    title: "Vésperas da Guerra Mundial",
    description:
      "A Europa caminha para a Segunda Guerra Mundial. Portugal mantém neutralidade, mas a escassez de bens e o racionamento já se fazem sentir. Nas aldeias do Douro, a vida continua difícil, marcada pelo trabalho árduo nas vinhas e pela falta de recursos médicos.",
    icon: <Wheat className="w-5 h-5" />,
  },
];

const contextSections = [
  {
    title: "A Vida em Favaios",
    icon: <Wine className="w-6 h-6 text-[hsl(var(--gold))]" />,
    content:
      "Favaios, pequena aldeia do concelho de Alijó, no coração do Douro, era — e continua a ser — terra de vinho Moscatel e pão de trigo. Nos anos 1926-1940, a população vivia quase exclusivamente da agricultura e da vinha. As casas de granito acolhiam famílias numerosas, onde a mortalidade infantil era uma realidade quotidiana e a esperança de vida raramente ultrapassava os 60 anos.",
  },
  {
    title: "Causas de Morte Comuns",
    icon: <Cross className="w-6 h-6 text-[hsl(var(--gold))]" />,
    content:
      "Os registos paroquiais revelam um retrato da fragilidade da saúde pública na época. Pneumonia, tuberculose, gastroenterite e 'fraqueza geral' são causas recorrentes. A mortalidade infantil — frequentemente registada como 'dentição' ou 'debilidade congénita' — é esmagadora. As mulheres morriam de complicações no parto, e os homens de acidentes de trabalho nas vinhas e campos.",
  },
  {
    title: "O Papel da Igreja",
    icon: <Cross className="w-6 h-6 text-[hsl(var(--gold))]" />,
    content:
      "Numa época em que o registo civil era incipiente nas zonas rurais, a Igreja Católica desempenhava um papel central na documentação da vida e da morte. O pároco de Favaios registava meticulosamente cada óbito, incluindo nome, filiação, idade, estado civil, causa de morte e local de sepultura — dados que hoje nos permitem reconstruir a história destas vidas.",
  },
];

const ContextoHistorico = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-body text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
          <h1 className="font-display text-lg sm:text-xl font-semibold text-foreground">
            Contexto Histórico
          </h1>
          <span className="text-xs text-muted-foreground font-body">
            1926–1940
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--wine)/0.15)] to-transparent" />
        <motion.div
          {...fadeUp}
          className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10"
        >
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground leading-tight mb-6">
            Portugal Rural,{" "}
            <span className="text-[hsl(var(--gold))]">1926–1940</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Para compreender os registos de óbitos de Favaios, é preciso
            conhecer o mundo em que estas pessoas viveram e morreram — uma época
            de ditadura, pobreza e isolamento, mas também de fé, comunidade e
            resiliência.
          </p>
        </motion.div>
      </section>

      {/* Context cards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid gap-8 md:grid-cols-3 mb-20">
          {contextSections.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                {s.icon}
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {s.title}
                </h3>
              </div>
              <p className="font-body text-muted-foreground leading-relaxed text-sm">
                {s.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div {...fadeUp} className="mb-12 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            Cronologia
          </h2>
          <p className="font-body text-muted-foreground mt-2">
            Eventos que moldaram a vida e a morte em Favaios
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border sm:-translate-x-px" />

          <div className="space-y-12">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative pl-12 sm:pl-0"
                >
                  {/* Dot */}
                  <div className="absolute left-2.5 sm:left-1/2 sm:-translate-x-1/2 top-1 w-3 h-3 rounded-full bg-[hsl(var(--gold))] border-2 border-background shadow-sm z-10" />

                  <div
                    className={`sm:w-[calc(50%-2rem)] ${
                      isLeft ? "sm:mr-auto sm:pr-8" : "sm:ml-auto sm:pl-8"
                    }`}
                  >
                    <div className="bg-card border border-border rounded-lg p-5 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[hsl(var(--gold))]">
                          {item.icon}
                        </span>
                        <span className="font-display text-sm font-bold text-[hsl(var(--gold))]">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="font-display text-base font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-16">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">
            Explore os Registos
          </h3>
          <p className="font-body text-muted-foreground mb-6">
            Conheça as pessoas por trás dos números — pesquise os registos
            individuais de óbito.
          </p>
          <Link
            to="/registos"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[hsl(var(--wine))] text-[hsl(var(--parchment))] font-display font-semibold rounded-lg hover:bg-[hsl(var(--wine-light))] transition-colors"
          >
            Ver Registos de Óbitos
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default ContextoHistorico;
