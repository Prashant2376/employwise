export default function UserCardSkeleton() {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg animate-pulse">
      <div className="p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 rounded-full bg-gray-200"></div>
          </div>
          <div className="ml-4 flex-1">
            <div className="h-5 w-3/4 bg-gray-200 rounded"></div>
            <div className="mt-2 h-4 w-1/2 bg-gray-200 rounded"></div>
          </div>
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <div className="h-7 w-16 bg-gray-200 rounded-md"></div>
          <div className="h-7 w-16 bg-gray-200 rounded-md"></div>
        </div>
      </div>
    </div>
  );
}
