export default function HomeLoader() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Simula um título */}
      <div className="h-8 bg-gray-700 rounded w-2/3"></div>

      {/* Simula parágrafos */}
      <div className="h-4 bg-gray-700 rounded w-full"></div>
      <div className="h-4 bg-gray-700 rounded w-5/6"></div>
      <div className="h-4 bg-gray-700 rounded w-4/6"></div>

      {/* Simula um card ou imagem */}
      <div className="h-48 bg-gray-700 rounded w-full"></div>
    </div>
  );
}