import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowLeft, Filter, X, User, Calendar, Skull } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deceasedRecords, type DeceasedRecord } from "@/data/deceased";

const ITEMS_PER_PAGE = 10;

const allYears = Array.from(
  new Set(deceasedRecords.map((r) => r.dataObito.slice(0, 4)))
).sort();

const allCausas = Array.from(
  new Set(deceasedRecords.map((r) => r.causaMorte))
).sort();

const Registos = () => {
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState<string>("all");
  const [sexFilter, setSexFilter] = useState<string>("all");
  const [causaFilter, setCausaFilter] = useState<string>("all");
  const [page, setPage] = useState(1);
  const [selectedRecord, setSelectedRecord] = useState<DeceasedRecord | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return deceasedRecords.filter((r) => {
      const matchesSearch =
        search === "" ||
        r.nome.toLowerCase().includes(search.toLowerCase()) ||
        r.pai.toLowerCase().includes(search.toLowerCase()) ||
        r.mae.toLowerCase().includes(search.toLowerCase()) ||
        r.causaMorte.toLowerCase().includes(search.toLowerCase());
      const matchesYear =
        yearFilter === "all" || r.dataObito.startsWith(yearFilter);
      const matchesSex = sexFilter === "all" || r.sexo === sexFilter;
      const matchesCausa =
        causaFilter === "all" || r.causaMorte === causaFilter;
      return matchesSearch && matchesYear && matchesSex && matchesCausa;
    });
  }, [search, yearFilter, sexFilter, causaFilter]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const resetFilters = () => {
    setSearch("");
    setYearFilter("all");
    setSexFilter("all");
    setCausaFilter("all");
    setPage(1);
  };

  const hasActiveFilters =
    search !== "" ||
    yearFilter !== "all" ||
    sexFilter !== "all" ||
    causaFilter !== "all";

  const formatDate = (d: string) => {
    const [y, m, day] = d.split("-");
    return `${day}/${m}/${y}`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-body text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
          <h1 className="font-display text-lg sm:text-xl font-semibold text-foreground">
            Registos de Óbitos
          </h1>
          <span className="text-xs text-muted-foreground font-body">
            {filtered.length} registo{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Pesquisar por nome, pais ou causa de morte…"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="pl-12 h-14 text-base font-body bg-card border-border rounded-lg shadow-sm focus-visible:ring-primary"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Filter toggle */}
        <div className="flex items-center gap-3 mb-6">
          <Button
            variant={showFilters ? "default" : "outline"}
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className="gap-2 font-body"
          >
            <Filter className="w-4 h-4" />
            Filtros
          </Button>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={resetFilters}
              className="gap-1 text-muted-foreground font-body"
            >
              <X className="w-3 h-3" />
              Limpar filtros
            </Button>
          )}
        </div>

        {/* Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mb-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-card rounded-lg border border-border">
                <div>
                  <label className="text-xs font-display uppercase tracking-wider text-muted-foreground mb-2 block">
                    Ano
                  </label>
                  <Select
                    value={yearFilter}
                    onValueChange={(v) => {
                      setYearFilter(v);
                      setPage(1);
                    }}
                  >
                    <SelectTrigger className="font-body">
                      <SelectValue placeholder="Todos os anos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos os anos</SelectItem>
                      {allYears.map((y) => (
                        <SelectItem key={y} value={y}>
                          {y}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-xs font-display uppercase tracking-wider text-muted-foreground mb-2 block">
                    Sexo
                  </label>
                  <Select
                    value={sexFilter}
                    onValueChange={(v) => {
                      setSexFilter(v);
                      setPage(1);
                    }}
                  >
                    <SelectTrigger className="font-body">
                      <SelectValue placeholder="Todos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="M">Masculino</SelectItem>
                      <SelectItem value="F">Feminino</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-xs font-display uppercase tracking-wider text-muted-foreground mb-2 block">
                    Causa de Morte
                  </label>
                  <Select
                    value={causaFilter}
                    onValueChange={(v) => {
                      setCausaFilter(v);
                      setPage(1);
                    }}
                  >
                    <SelectTrigger className="font-body">
                      <SelectValue placeholder="Todas" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas</SelectItem>
                      {allCausas.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card rounded-lg border border-border overflow-hidden shadow-sm"
        >
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary/50">
                <TableHead className="font-display text-xs uppercase tracking-wider">
                  Nome
                </TableHead>
                <TableHead className="font-display text-xs uppercase tracking-wider hidden sm:table-cell">
                  Idade
                </TableHead>
                <TableHead className="font-display text-xs uppercase tracking-wider hidden md:table-cell">
                  Data
                </TableHead>
                <TableHead className="font-display text-xs uppercase tracking-wider hidden lg:table-cell">
                  Causa de Morte
                </TableHead>
                <TableHead className="font-display text-xs uppercase tracking-wider hidden md:table-cell">
                  Estado
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginated.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="text-center py-12 text-muted-foreground font-body"
                  >
                    Nenhum registo encontrado.
                  </TableCell>
                </TableRow>
              ) : (
                paginated.map((r, i) => (
                  <motion.tr
                    key={r.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.03 }}
                    className="border-b border-border cursor-pointer hover:bg-secondary/30 transition-colors"
                    onClick={() => setSelectedRecord(r)}
                  >
                    <TableCell className="font-body font-medium">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full flex-shrink-0 ${
                            r.sexo === "M"
                              ? "bg-[hsl(var(--primary))]"
                              : "bg-[hsl(var(--accent))]"
                          }`}
                        />
                        {r.nome}
                      </div>
                    </TableCell>
                    <TableCell className="font-body hidden sm:table-cell">
                      {r.idade} anos
                    </TableCell>
                    <TableCell className="font-body hidden md:table-cell text-muted-foreground">
                      {formatDate(r.dataObito)}
                    </TableCell>
                    <TableCell className="font-body hidden lg:table-cell">
                      {r.causaMorte}
                    </TableCell>
                    <TableCell className="font-body hidden md:table-cell text-muted-foreground">
                      {r.estadoCivil}
                    </TableCell>
                  </motion.tr>
                ))
              )}
            </TableBody>
          </Table>
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-6">
            <Button
              variant="outline"
              size="sm"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="font-body"
            >
              Anterior
            </Button>
            <span className="text-sm text-muted-foreground font-body px-4">
              Página {page} de {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="font-body"
            >
              Seguinte
            </Button>
          </div>
        )}
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selectedRecord && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedRecord(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-card border border-border rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-border flex items-start justify-between">
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground">
                    {selectedRecord.nome}
                  </h2>
                  <p className="text-sm text-muted-foreground font-body mt-1">
                    {formatDate(selectedRecord.dataObito)}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedRecord(null)}
                  className="text-muted-foreground hover:text-foreground p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <DetailItem
                    icon={<User className="w-4 h-4" />}
                    label="Idade"
                    value={`${selectedRecord.idade} anos`}
                  />
                  <DetailItem
                    icon={<User className="w-4 h-4" />}
                    label="Sexo"
                    value={selectedRecord.sexo === "M" ? "Masculino" : "Feminino"}
                  />
                  <DetailItem
                    icon={<Skull className="w-4 h-4" />}
                    label="Causa de Morte"
                    value={selectedRecord.causaMorte}
                  />
                  <DetailItem
                    icon={<Calendar className="w-4 h-4" />}
                    label="Estado Civil"
                    value={selectedRecord.estadoCivil}
                  />
                </div>
                <div className="border-t border-border pt-4 space-y-3">
                  <DetailItem label="Pai" value={selectedRecord.pai} />
                  <DetailItem label="Mãe" value={selectedRecord.mae} />
                  <DetailItem
                    label="Naturalidade"
                    value={selectedRecord.naturalidade}
                  />
                  <DetailItem
                    label="Sepultura"
                    value={selectedRecord.localSepultura}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DetailItem = ({
  icon,
  label,
  value,
}: {
  icon?: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div>
    <div className="flex items-center gap-1.5 text-xs font-display uppercase tracking-wider text-muted-foreground mb-1">
      {icon}
      {label}
    </div>
    <p className="font-body text-foreground">{value}</p>
  </div>
);

export default Registos;
