import React, { useState } from 'react';
import { ArrowLeft, Coffee, Sun, Sunset, Moon } from 'lucide-react';

const menuData = {
  desayunos: [
    { id: 1, title: "Opción 1", ingredients: ["1 taza de leche descremada con infusión", "1 rebanada de pan integral con 1 feta de queso descremado y 1 feta de jamón cocido natural", "1 fruta"], prep: "", img: "https://loremflickr.com/400/300/breakfast,coffee?random=1" },
    { id: 2, title: "Opción 2", ingredients: ["1 taza de leche descremada con infusión", "2 galletas de arroz integral con 1/2 palta y 1 feta de queso descremado", "1 fruta"], prep: "", img: "https://loremflickr.com/400/300/breakfast,healthy?random=2" },
    { id: 3, title: "Opción 3", ingredients: ["Infusión", "1 porción de panqueque de banana (puede ser otra fruta)"], prep: "Mezclar 1 huevo y 1 clara con 3 cucharadas de avena o harina integral y 1/2 banana pisada. Cocinar en sartén vuelta y vuelta.", img: "https://loremflickr.com/400/300/pancakes?random=3" },
    { id: 4, title: "Opción 4", ingredients: ["1 taza de leche descremada con infusión", "1 rebanada de pan integral con 1 huevo revuelto", "1 fruta"], prep: "", img: "https://loremflickr.com/400/300/breakfast,toast?random=4" },
    { id: 5, title: "Opción 5", ingredients: ["1 taza de leche descremada con infusión", "2 galletas de arroz integral con 1 huevo duro", "1 fruta"], prep: "", img: "https://loremflickr.com/400/300/breakfast,egg?random=5" },
    { id: 6, title: "Opción 6", ingredients: ["Infusión", "Panqueque de manzana (puede ser otra fruta)"], prep: "Mezclar 1 huevo y 1 clara con 3 cucharadas de avena o harina de almendras y 1/2 manzana. Cocinar en sartén vuelta y vuelta.", img: "https://loremflickr.com/400/300/pancakes?random=6" },
    { id: 7, title: "Opción 7", ingredients: ["1 taza de leche descremada con infusión", "1 rebanada de pan integral con 1 feta de queso descremado y 1 feta de jamón cocido natural", "1 fruta"], prep: "", img: "https://loremflickr.com/400/300/breakfast,healthy?random=7" }
  ],
  almuerzos: [
    { id: 11, title: "Opción 1", ingredients: ["Ensalada de garbanzos, 2 huevos duros, hojas verdes, chauchas y tomate", "1 cucharada de aceite"], prep: "", img: "https://loremflickr.com/400/300/lunch,salad?random=11" },
    { id: 12, title: "Opción 2", ingredients: ["1 milanesa al horno/sartén", "Ensalada de hojas verdes, zanahoria y repollo", "1 cucharada de aceite"], prep: "", img: "https://loremflickr.com/400/300/lunch,meat?random=12" },
    { id: 13, title: "Opción 3", ingredients: ["Ensalada tibia de pollo, choclo, calabaza asada, hojas verdes y tomate", "1 cucharada de aceite"], prep: "", img: "https://loremflickr.com/400/300/lunch,chicken?random=13" },
    { id: 14, title: "Opción 4", ingredients: ["2 porciones de tarta de pollo (de 1 tapa)", "Ensalada de hojas verdes y tomate", "1 cucharada de aceite"], prep: "", img: "https://loremflickr.com/400/300/lunch,pie?random=14" },
    { id: 15, title: "Opción 5", ingredients: ["Ensalada de arroz integral, atún, hojas verdes, remolacha y zanahoria", "1 cucharada de aceite"], prep: "", img: "https://loremflickr.com/400/300/lunch,tuna?random=15" },
    { id: 16, title: "Opción 6", ingredients: ["2 canastitas de pollo y vegetales al horno", "Ensalada de hojas verdes", "1 cucharada de aceite"], prep: "Hacer con discos de empanadas. Rellenar con pollo, vegetales a gusto y queso descremado. Cocinar en horno.", img: "https://loremflickr.com/400/300/lunch,empanada?random=16" },
    { id: 17, title: "Opción 7", ingredients: ["1 bife de carne magra a la parrilla o horno", "Ensalada hervida de papa, remolacha y zanahoria", "1 cucharada de aceite"], prep: "", img: "https://loremflickr.com/400/300/lunch,steak?random=17" }
  ],
  meriendas: [
    { id: 21, title: "Opción 1", ingredients: ["1 pote de yogur natural con 1 puñadito de frutos secos", "1 cucharada de granola sin azúcar", "1 fruta"], prep: "1 puñadito de frutos secos equivale a 8 unidades (Ej: 8 almendras).", img: "https://loremflickr.com/400/300/snack,yogurt?random=21" },
    { id: 22, title: "Opción 2", ingredients: ["1 taza de leche descremada con infusión", "1 barra de cereal", "1 fruta"], prep: "", img: "https://loremflickr.com/400/300/snack,cereal?random=22" },
    { id: 23, title: "Opción 3", ingredients: ["1 taza de leche descremada con infusión", "3 galletitas simples (integrales o de avena)", "1 fruta"], prep: "", img: "https://loremflickr.com/400/300/snack,cookies?random=23" },
    { id: 24, title: "Opción 4", ingredients: ["1 pote de yogur natural con 2 cucharadas de granola sin azúcar", "1 fruta"], prep: "", img: "https://loremflickr.com/400/300/snack,yogurt?random=24" },
    { id: 25, title: "Opción 5", ingredients: ["1 taza de leche descremada con infusión", "1 rebanada de pan integral con 1 feta de queso descremado", "1 fruta"], prep: "", img: "https://loremflickr.com/400/300/snack,toast?random=25" },
    { id: 26, title: "Opción 6", ingredients: ["1 pote de yogur natural con 1 puñadito de frutos secos", "1 cucharada de granola sin azúcar", "1 fruta"], prep: "", img: "https://loremflickr.com/400/300/snack,yogurt?random=26" },
    { id: 27, title: "Opción 7", ingredients: ["Merienda opcional libre (para el fin de semana)"], prep: "No es obligatorio, se puede reemplazar por otra comida de la guía.", img: "https://loremflickr.com/400/300/snack,fruit?random=27" }
  ],
  cenas: [
    { id: 31, title: "Opción 1", ingredients: ["1 bife de carne magra al horno/sartén", "Puré de calabaza", "Ensalada de hojas verdes", "1 cucharada de aceite"], prep: "", img: "https://loremflickr.com/400/300/dinner,meat?random=31" },
    { id: 32, title: "Opción 2", ingredients: ["2 hamburguesas de pollo al horno/sartén", "Puré mixto de papa y calabaza", "1 cucharada de aceite"], prep: "", img: "https://loremflickr.com/400/300/dinner,chicken?random=32" },
    { id: 33, title: "Opción 3", ingredients: ["1 filete de pescado al horno/sartén", "Bastones de zanahoria y boniato al horno", "1 cucharada de aceite"], prep: "", img: "https://loremflickr.com/400/300/dinner,fish?random=33" },
    { id: 34, title: "Opción 4", ingredients: ["2 zapallitos verdes al horno rellenos de carne magra y vegetales", "1 cucharada de aceite"], prep: "", img: "https://loremflickr.com/400/300/dinner,vegetables?random=34" },
    { id: 35, title: "Opción 5", ingredients: ["1 filete de pollo al horno/sartén", "Vegetales salteados (cebolla, pimiento, choclo, berenjena)", "1 cucharada de aceite"], prep: "", img: "https://loremflickr.com/400/300/dinner,chicken?random=35" },
    { id: 36, title: "Opción 6", ingredients: ["Cena opcional libre (para el fin de semana)"], prep: "No es obligatorio, se puede reemplazar por otra comida de la guía.", img: "https://loremflickr.com/400/300/dinner,restaurant?random=36" },
    { id: 37, title: "Opción 7", ingredients: ["Omelete de 2 huevos relleno de 1 feta de queso descremado y tomate", "Bastones de zanahoria al horno", "1 cucharada de aceite"], prep: "", img: "https://loremflickr.com/400/300/dinner,omelette?random=37" }
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
      <div className="grid grid-cols-2 gap-4 flex-grow">
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