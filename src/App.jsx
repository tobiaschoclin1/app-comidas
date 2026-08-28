import { useState } from 'react';
import { ArrowLeft, Coffee, Sun, Sunset, Moon } from 'lucide-react';

const menuData = {
  desayunos: [
    { id: 1, title: "Tostada de jamón y queso", ingredients: ["1 taza de leche descremada con infusión", "1 rebanada de pan integral con 1 feta de queso descremado y 1 feta de jamón cocido natural", "1 fruta"], prep: "", img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=85" },
    { id: 2, title: "Galletas de arroz con palta", ingredients: ["1 taza de leche descremada con infusión", "2 galletas de arroz integral con 1/2 palta y 1 feta de queso descremado", "1 fruta"], prep: "", img: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=800&q=85" },
    { id: 3, title: "Pancake de banana", ingredients: ["Infusión", "1 porción de panqueque de banana (puede ser otra fruta)"], prep: "Mezclar 1 huevo y 1 clara con 3 cucharadas de avena o harina integral y 1/2 banana pisada. Cocinar en sartén vuelta y vuelta.", img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=85" },
    { id: 4, title: "Tostada con huevo revuelto", ingredients: ["1 taza de leche descremada con infusión", "1 rebanada de pan integral con 1 huevo revuelto", "1 fruta"], prep: "", img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&q=85" },
    { id: 5, title: "Galletas de arroz con huevo", ingredients: ["1 taza de leche descremada con infusión", "2 galletas de arroz integral con 1 huevo duro", "1 fruta"], prep: "", img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=85" },
    { id: 6, title: "Pancake de manzana", ingredients: ["Infusión", "Panqueque de manzana (puede ser otra fruta)"], prep: "Mezclar 1 huevo y 1 clara con 3 cucharadas de avena o harina de almendras y 1/2 manzana. Cocinar en sartén vuelta y vuelta.", img: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=85" }
  ],
  almuerzos: [
    { id: 11, title: "Ensalada de garbanzos", ingredients: ["Ensalada de garbanzos, 2 huevos duros, hojas verdes, chauchas y tomate", "1 cucharada de aceite"], prep: "", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=85" },
    { id: 12, title: "Milanesa", ingredients: ["1 milanesa al horno/sartén", "Ensalada de hojas verdes, zanahoria y repollo", "1 cucharada de aceite"], prep: "", img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=85" },
    { id: 13, title: "Ensalada de pollo", ingredients: ["Ensalada tibia de pollo, choclo, calabaza asada, hojas verdes y tomate", "1 cucharada de aceite"], prep: "", img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=85" },
    { id: 14, title: "Tarta de pollo", ingredients: ["2 porciones de tarta de pollo (de 1 tapa)", "Ensalada de hojas verdes y tomate", "1 cucharada de aceite"], prep: "", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=85" },
    { id: 15, title: "Ensalada de atún", ingredients: ["Ensalada de arroz integral, atún, hojas verdes, remolacha y zanahoria", "1 cucharada de aceite"], prep: "", img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=85" },
    { id: 16, title: "Canastitas de pollo", ingredients: ["2 canastitas de pollo y vegetales al horno", "Ensalada de hojas verdes", "1 cucharada de aceite"], prep: "Hacer con discos de empanadas. Rellenar con pollo, vegetales a gusto y queso descremado. Cocinar en horno.", img: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=85" },
    { id: 17, title: "Carne a la parrilla", ingredients: ["1 bife de carne magra a la parrilla o horno", "Ensalada hervida de papa, remolacha y zanahoria", "1 cucharada de aceite"], prep: "", img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=85" }
  ],
  meriendas: [
    { id: 21, title: "Yogur con frutos secos", ingredients: ["1 pote de yogur natural con 1 puñadito de frutos secos", "1 cucharada de granola sin azúcar", "1 fruta"], prep: "1 puñadito de frutos secos equivale a 8 unidades (Ej: 8 almendras).", img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=85" },
    { id: 22, title: "Barrita", ingredients: ["1 taza de leche descremada con infusión", "1 barra de cereal", "1 fruta"], prep: "", img: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&w=800&q=85" },
    { id: 23, title: "Galletitas", ingredients: ["1 taza de leche descremada con infusión", "3 galletitas simples (integrales o de avena)", "1 fruta"], prep: "", img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=85" },
    { id: 24, title: "Yogur con granola", ingredients: ["1 pote de yogur natural con 2 cucharadas de granola sin azúcar", "1 fruta"], prep: "", img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=85" },
    { id: 25, title: "Tostada", ingredients: ["1 taza de leche descremada con infusión", "1 rebanada de pan integral con 1 feta de queso descremado", "1 fruta"], prep: "", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=85" },
    { id: 27, title: "Permitido", ingredients: ["Merienda opcional libre (para el fin de semana)"], prep: "No es obligatorio, se puede reemplazar por otra comida de la guía.", img: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&w=800&q=85" }
  ],
  cenas: [
    { id: 31, title: "Carne al horno", ingredients: ["1 bife de carne magra al horno/sartén", "Puré de calabaza", "Ensalada de hojas verdes", "1 cucharada de aceite"], prep: "", img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=85" },
    { id: 32, title: "Hamburguesas de pollo", ingredients: ["2 hamburguesas de pollo al horno/sartén", "Puré mixto de papa y calabaza", "1 cucharada de aceite"], prep: "", img: "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?auto=format&fit=crop&w=800&q=85" },
    { id: 33, title: "Pescado", ingredients: ["1 filete de pescado al horno/sartén", "Bastones de zanahoria y boniato al horno", "1 cucharada de aceite"], prep: "", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=85" },
    { id: 34, title: "Zapallitos rellenos", ingredients: ["2 zapallitos verdes al horno rellenos de carne magra y vegetales", "1 cucharada de aceite"], prep: "", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=85" },
    { id: 35, title: "Pollo", ingredients: ["1 filete de pollo al horno/sartén", "Vegetales salteados (cebolla, pimiento, choclo, berenjena)", "1 cucharada de aceite"], prep: "", img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=85" },
    { id: 36, title: "Omelette", ingredients: ["Omelete de 2 huevos relleno de 1 feta de queso descremado y tomate", "Bastones de zanahoria al horno", "1 cucharada de aceite"], prep: "", img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&q=85" },
    { id: 37, title: "Permitido", ingredients: ["Cena opcional libre (para el fin de semana)"], prep: "No es obligatorio, se puede reemplazar por otra comida de la guía.", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=85" }
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
      <h1 className="text-3xl font-bold text-green-900 mb-8 text-center mt-8">Mi Plan Alimentario</h1>
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