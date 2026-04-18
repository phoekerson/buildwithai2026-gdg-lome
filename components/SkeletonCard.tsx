export default function SkeletonCard() {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-4 animate-pulse">
      <div className="flex justify-between items-center mb-2">
        <div className="h-4 w-16 bg-gray-200 rounded"></div>
        <div className="h-4 w-4 bg-gray-200 rounded"></div>
      </div>
      <div className="h-6 w-3/4 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 w-full bg-gray-200 rounded mb-1"></div>
      <div className="h-4 w-5/6 bg-gray-200 rounded mb-3"></div>
      <div className="flex justify-between items-center pt-3 border-t border-gray-50">
        <div className="h-3 w-20 bg-gray-200 rounded"></div>
        <div className="h-4 w-16 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}
