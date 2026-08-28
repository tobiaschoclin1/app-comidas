import { useState } from 'react';
import { ArrowLeft, Coffee, Sun, Sunset, Moon } from 'lucide-react';

const menuData = {
  desayunos: [
    { id: 1, title: "Tostada de jamón y queso", ingredients: ["1 taza de leche descremada con infusión", "1 rebanada de pan integral con 1 feta de queso descremado y 1 feta de jamón cocido natural", "1 fruta"], prep: "", img: "/fotos_comidas/desayuno_1.jpg" },
    { id: 2, title: "Galletas de arroz con palta", ingredients: ["1 taza de leche descremada con infusión", "2 galletas de arroz integral con 1/2 palta y 1 feta de queso descremado", "1 fruta"], prep: "", img: "/fotos_comidas/desayuno_2.jpg" },
    { id: 3, title: "Pancake de banana", ingredients: ["Infusión", "1 porción de panqueque de banana (puede ser otra fruta)"], prep: "Mezclar 1 huevo y 1 clara con 3 cucharadas de avena o harina integral y 1/2 banana pisada. Cocinar en sartén vuelta y vuelta.", img: "/fotos_comidas/desayuno_3.jpg" },
    { id: 4, title: "Tostada con huevo revuelto", ingredients: ["1 taza de leche descremada con infusión", "1 rebanada de pan integral con 1 huevo revuelto", "1 fruta"], prep: "", img: "/fotos_comidas/desayuno_4.jpg" },
    { id: 5, title: "Galletas de arroz con huevo", ingredients: ["1 taza de leche descremada con infusión", "2 galletas de arroz integral con 1 huevo duro", "1 fruta"], prep: "", img: "/fotos_comidas/desayuno_5.jpg" },
    { id: 6, title: "Pancake de manzana", ingredients: ["Infusión", "Panqueque de manzana (puede ser otra fruta)"], prep: "Mezclar 1 huevo y 1 clara con 3 cucharadas de avena o harina de almendras y 1/2 manzana. Cocinar en sartén vuelta y vuelta.", img: "/fotos_comidas/desayuno_6.jpg" }
  ],
  almuerzos: [
    { id: 11, title: "Ensalada de garbanzos", ingredients: ["Ensalada de garbanzos, 2 huevos duros, hojas verdes, chauchas y tomate", "1 cucharada de aceite"], prep: "", img: "/fotos_comidas/almuerzo_1.jpg" },
    { id: 12, title: "Milanesa", ingredients: ["1 milanesa al horno/sartén", "Ensalada de hojas verdes, zanahoria y repollo", "1 cucharada de aceite"], prep: "", img: "/fotos_comidas/almuerzo_2.jpg" },
    { id: 13, title: "Ensalada de pollo", ingredients: ["Ensalada tibia de pollo, choclo, calabaza asada, hojas verdes y tomate", "1 cucharada de aceite"], prep: "", img: "/fotos_comidas/almuerzo_3.jpg" },
    { id: 14, title: "Tarta de pollo", ingredients: ["2 porciones de tarta de pollo (de 1 tapa)", "Ensalada de hojas verdes y tomate", "1 cucharada de aceite"], prep: "", img: "/fotos_comidas/almuerzo_4.jpg" },
    { id: 15, title: "Ensalada de atún", ingredients: ["Ensalada de arroz integral, atún, hojas verdes, remolacha y zanahoria", "1 cucharada de aceite"], prep: "", img: "/fotos_comidas/almuerzo_5.jpg" },
    { id: 16, title: "Canastitas de pollo", ingredients: ["2 canastitas de pollo y vegetales al horno", "Ensalada de hojas verdes", "1 cucharada de aceite"], prep: "Hacer con discos de empanadas. Rellenar con pollo, vegetales a gusto y queso descremado. Cocinar en horno.", img: "/fotos_comidas/almuerzo_6.jpg" },
    { id: 17, title: "Carne a la parrilla", ingredients: ["1 bife de carne magra a la parrilla o horno", "Ensalada hervida de papa, remolacha y zanahoria", "1 cucharada de aceite"], prep: "", img: "/fotos_comidas/almuerzo_7.jpg" }
  ],
  meriendas: [
    { id: 21, title: "Yogur con frutos secos", ingredients: ["1 pote de yogur natural con 1 puñadito de frutos secos", "1 cucharada de granola sin azúcar", "1 fruta"], prep: "1 puñadito de frutos secos equivale a 8 unidades (Ej: 8 almendras).", img: "/fotos_comidas/merienda_1.jpg" },
    { id: 22, title: "Barrita", ingredients: ["1 taza de leche descremada con infusión", "1 barra de cereal", "1 fruta"], prep: "", img: "/fotos_comidas/merienda_2.jpg" },
    { id: 23, title: "Galletitas", ingredients: ["1 taza de leche descremada con infusión", "3 galletitas simples (integrales o de avena)", "1 fruta"], prep: "", img: "/fotos_comidas/merienda_3.jpg" },
    { id: 24, title: "Yogur con granola", ingredients: ["1 pote de yogur natural con 2 cucharadas de granola sin azúcar", "1 fruta"], prep: "", img: "/fotos_comidas/merienda_4.jpg" },
    { id: 25, title: "Tostada", ingredients: ["1 taza de leche descremada con infusión", "1 rebanada de pan integral con 1 feta de queso descremado", "1 fruta"], prep: "", img: "/fotos_comidas/merienda_5.jpg" },
    { id: 27, title: "Permitido", ingredients: ["Merienda opcional libre (para el fin de semana)"], prep: "No es obligatorio, se puede reemplazar por otra comida de la guía.", img: "/fotos_comidas/merienda_6.jpg" }
  ],
  cenas: [
    { id: 31, title: "Carne al horno", ingredients: ["1 bife de carne magra al horno/sartén", "Puré de calabaza", "Ensalada de hojas verdes", "1 cucharada de aceite"], prep: "", img: "/fotos_comidas/cena_1.jpg" },
    { id: 32, title: "Hamburguesas de pollo", ingredients: ["2 hamburguesas de pollo al horno/sartén", "Puré mixto de papa y calabaza", "1 cucharada de aceite"], prep: "", img: "/fotos_comidas/cena_2.jpg" },
    { id: 33, title: "Pescado", ingredients: ["1 filete de pescado al horno/sartén", "Bastones de zanahoria y boniato al horno", "1 cucharada de aceite"], prep: "", img: "/fotos_comidas/cena_3.jpg" },
    { id: 34, title: "Zapallitos rellenos", ingredients: ["2 zapallitos verdes al horno rellenos de carne magra y vegetales", "1 cucharada de aceite"], prep: "", img: "/fotos_comidas/cena_4.jpg" },
    { id: 35, title: "Pollo", ingredients: ["1 filete de pollo al horno/sartén", "Vegetales salteados (cebolla, pimiento, choclo, berenjena)", "1 cucharada de aceite"], prep: "", img: "/fotos_comidas/cena_5.jpg" },
    { id: 36, title: "Omelette", ingredients: ["Omelete de 2 huevos relleno de 1 feta de queso descremado y tomate", "Bastones de zanahoria al horno", "1 cucharada de aceite"], prep: "", img: "/fotos_comidas/cena_6.jpg" },
    { id: 37, title: "Permitido", ingredients: ["Cena opcional libre (para el fin de semana)"], prep: "No es obligatorio, se puede reemplazar por otra comida de la guía.", img: "/fotos_comidas/cena_7.jpg" }
  ]
};

const categories = [
  { id: 'desayunos', title: 'Desayunos', icon: <Coffee size={32} /> },
  { id: 'almuerzos', title: 'Almuerzos', icon: <Sun size={32} /> },
  { id: 'meriendas', title: 'Meriendas', icon: <Sunset size={32} /> },
  { id: 'cenas', title: 'Cenas', icon: <Moon size={32} /> }
];

export default function App() {
  const [currentView, setCurrentView] = useState(null);

  const renderHome = () => (
    <div className="p-6 h-full flex flex-col">
      <h1 className="text-3xl font-bold text-green-900 mb-8 text-center mt-8">Dieta para el gordo puto de Tobi</h1>
      <div className="grid grid-cols-1 gap-4 flex-grow">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCurrentView(cat.id)}
            className="bg-green-200 hover:bg-green-300 transition-colors rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm text-green-900"
          >
            <div className="mb-3 text-green-700">{cat.icon}</div>
            <span className="font-semibold text-lg">{cat.title}</span>
          </button>
        ))}
      </div>
    </div>
  );

  const renderCategory = () => {
    const meals = menuData[currentView];
    const categoryTitle = categories.find(c => c.id === currentView)?.title;

    return (
      <div className="p-6">
        <div className="flex items-center mb-6 mt-4">
          <button 
            onClick={() => setCurrentView(null)}
            className="p-2 bg-green-200 rounded-full text-green-800 hover:bg-green-300 transition"
          >
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-2xl font-bold text-green-900 ml-4">{categoryTitle}</h2>
        </div>

        <div className="space-y-6">
          {meals.map((meal) => (
            <div key={meal.id} className="bg-green-100 rounded-3xl overflow-hidden shadow-sm border border-green-200">
              <img src={meal.img} alt={meal.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-bold text-green-900 mb-3">{meal.title}</h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-green-800 mb-1">Ingredientes:</h4>
                  <ul className="list-disc list-inside text-green-700 text-sm space-y-1">
                    {meal.ingredients.map((ing, idx) => (
                      <li key={idx}>{ing}</li>
                    ))}
                  </ul>
                </div>

                {meal.prep && (
                  <div>
                    <h4 className="font-semibold text-green-800 mb-1">Preparación:</h4>
                    <p className="text-green-700 text-sm leading-relaxed">{meal.prep}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-md mx-auto min-h-screen bg-green-50 shadow-xl overflow-x-hidden">
      {currentView === null ? renderHome() : renderCategory()}
    </div>
  );
}