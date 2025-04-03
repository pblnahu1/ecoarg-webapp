import { LayoutDashboard, Users, FileText, Settings, Bell, Wallet } from "lucide-react";

const cards = [
  { title: 'Total Users', icon: Users, value: '12,345', change: '+14%' },
  { title: 'Revenue', icon: Wallet, value: '$45,678', change: '+23%' },
  { title: 'Documents', icon: FileText, value: '234', change: '+7%' },
  { title: 'Notifications', icon: Bell, value: '18', change: '-2%' },
  { title: 'Settings', icon: Settings, value: '5', change: '0%' },
  { title: 'Projects', icon: LayoutDashboard, value: '47', change: '+12%' },
];

interface MainContentProps {
  darkMode: boolean;
}

const MainContent = ({ darkMode }: MainContentProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg ${darkMode ? 'bg-zinc-900 hover:bg-zinc-800' : 'bg-white hover:bg-gray-50'
              } shadow-sm transition-colors duration-200`}
          >
            <div className="flex items-center justify-between mb-4">
              <card.icon
                className={`w-8 h-8 ${darkMode ? 'text-gray-200' : 'text-gray-600'
                  }`}
              />
              <span
                className={`text-sm font-medium ${card.change.startsWith('+')
                  ? 'text-green-500'
                  : card.change.startsWith('-')
                    ? 'text-red-500'
                    : darkMode
                      ? 'text-gray-400'
                      : 'text-gray-500'
                  }`}
              >
                {card.change}
              </span>
            </div>
            <h3
              className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'
                }`}
            >
              {card.value}
            </h3>
            <p
              className={`mt-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}
            >
              {card.title}
            </p>
          </div>
          
        ))}
      </div>
    </>
  )
}

export default MainContent
