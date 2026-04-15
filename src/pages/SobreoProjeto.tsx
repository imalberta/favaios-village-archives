import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const SobreoProjeto = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="font-display text-lg font-semibold">Sobre o Projeto</h1>
        </div>
      </header>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-accent font-display text-sm tracking-[0.25em] uppercase mb-4 text-center"
        >
          Humanidades Digitais · Universidade do Minho
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold mb-10 text-center"
        >
          Sobre o Projeto
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-body text-lg leading-relaxed text-muted-foreground space-y-6"
        >
          <p>
            Como estudantes do mestrado de Humanidades Digitais da Universidade do Minho, desenvolvemos
            esta página web no âmbito da Unidade Curricular de Interfaces Web em colaboração com a Unidade
            Curricular de Edição de Património Textual, onde tivemos a oportunidade de trabalhar com
            manuscritos referentes aos óbitos em Favaios dos anos de 1926 a 1940.
          </p>

          <p>
            Dessas transcrições dos manuscritos em aula surgiu o{" "}
            <em className="text-foreground font-semibold italic">
              'Livro do Registo Parochial de óbitos da Freguezia de Favaios'
            </em>
            , uma edição semidiplomática do manuscrito da Paróquia de Favaios escrita em colaboração com a
            docente da cadeira e toda a turma do mestrado.
          </p>

          <p>
            A proposta do projeto é incorporar num só website toda a informação que considerámos relevante,
            criando uma base de dados que apresente a informação de forma clara, acessível e respeitosa.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default SobreoProjeto;
