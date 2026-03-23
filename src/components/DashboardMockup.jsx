import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, CartesianGrid, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

// Helper to generate natural-looking data
const generateNaturalData = (count) => {
  const data = [];
  const trendData = [];
  const now = new Date();
  
  for (let i = 0; i < count; i++) {
    const day = new Date();
    day.setDate(now.getDate() - (count - i));
    const dayLabel = day.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
    const isWeekend = day.getDay() === 0 || day.getDay() === 6;
    
    // Revenue: Trend + Seasonality (higher on weekdays) + Noise
    const baseRev = 3000 + (i * 45);
    const seasonalityRev = isWeekend ? -800 : 400;
    const noiseRev = Math.random() * 300;
    const receita = Math.floor(baseRev + seasonalityRev + noiseRev);
    
    // Users: Base + Growth + Weekend dip + Noise
    const baseUsers = 1500 + (i * 12);
    const seasonalityUsers = isWeekend ? -600 : 150;
    const noiseUsers = Math.random() * 150;
    const usuarios = Math.floor(baseUsers + seasonalityUsers + noiseUsers);

    data.push({
      name: dayLabel,
      receita,
      usuarios,
      rawDate: day
    });

    // Trend: Sine wave performance + Noise
    trendData.push({
      name: dayLabel,
      valor: Math.floor(400 + Math.sin(i / 4) * 120 + Math.random() * 60)
    });
  }
  return { data, trendData };
};

const { data, trendData } = generateNaturalData(40);

// Data for PieChart
const pieData = [
  { name: 'Produto Principal', value: 450 },
  { name: 'Serviços B2B', value: 300 },
  { name: 'Licenças / Outros', value: 250 },
];
const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899'];

export const RevenueChart = () => (
  <ResponsiveContainer width="100%" height="100%">
    <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
      <defs>
        <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
        </linearGradient>
      </defs>
      <XAxis 
        dataKey="name" 
        stroke="#64748b" 
        fontSize={10} 
        tickLine={false} 
        axisLine={false} 
        interval={6} // Show every week
      />
      <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `R$${Math.floor(val/1000)}k`} />
      <Tooltip 
        contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
        itemStyle={{ color: '#e2e8f0' }}
      />
      <Area type="monotone" dataKey="receita" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
    </AreaChart>
  </ResponsiveContainer>
);

export const UsersChart = () => (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
      <XAxis 
        dataKey="name" 
        stroke="#64748b" 
        fontSize={10} 
        tickLine={false} 
        axisLine={false} 
        interval={6}
      />
      <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
      <Tooltip 
        contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
        cursor={{fill: 'rgba(255,255,255,0.05)'}}
      />
      <Bar dataKey="usuarios" fill="#8b5cf6" radius={[2, 2, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
);

export const PerformanceLineChart = () => (
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={trendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
      <XAxis 
        dataKey="name" 
        stroke="#64748b" 
        fontSize={10} 
        tickLine={false} 
        axisLine={false} 
        interval={6}
      />
      <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
      <Tooltip 
        contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
        itemStyle={{ color: '#e2e8f0' }}
      />
      <Line type="monotone" dataKey="valor" stroke="#ec4899" strokeWidth={3} dot={false} activeDot={{ r: 6 }} />
    </LineChart>
  </ResponsiveContainer>
);

export const CompositionPieChart = () => (
  <ResponsiveContainer width="100%" height="100%">
    <PieChart>
      <Pie
        data={pieData}
        innerRadius="60%"
        outerRadius="80%"
        paddingAngle={5}
        dataKey="value"
        stroke="none"
      >
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip 
        contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
        itemStyle={{ color: '#e2e8f0' }}
      />
    </PieChart>
  </ResponsiveContainer>
);

const FullscreenDashLayout = ({ title }) => {
  return (
    <div className="flex flex-col h-full w-full gap-5 pb-4 pr-1">
      {/* KPI ROW */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 shrink-0">
        <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-xl p-5 border border-slate-700/50 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
          <div className="text-slate-400 text-sm mb-1 font-medium">Volume Total (40d)</div>
          <div className="text-3xl font-bold text-white tracking-tight">R$ {Math.floor(data.reduce((acc, current) => acc + current.receita, 0) / 1000)}k</div>
          <div className="text-sm text-emerald-400 mt-2 flex items-center gap-1 font-medium">↑ 12.5% vs jan.</div>
        </div>

        <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-xl p-5 border border-slate-700/50 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
          <div className="text-slate-400 text-sm mb-1 font-medium">Ticket Médio / Custo</div>
          <div className="text-3xl font-bold text-white tracking-tight">R$ 342</div>
          <div className="text-sm text-red-400 mt-2 flex items-center gap-1 font-medium">↓ 4.2% vs mês ant.</div>
        </div>

        <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-xl p-5 border border-slate-700/50 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-pink-500"></div>
          <div className="text-slate-400 text-sm mb-1 font-medium">Taxa de Conversão</div>
          <div className="text-3xl font-bold text-white tracking-tight">18.4%</div>
          <div className="text-sm text-emerald-400 mt-2 flex items-center gap-1 font-medium">↑ 2.1% vs mês ant.</div>
        </div>

        <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-xl p-5 border border-slate-700/50 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
          <div className="text-slate-400 text-sm mb-1 font-medium">Meta Global (YTD)</div>
          <div className="text-3xl font-bold text-white tracking-tight">85%</div>
          <div className="w-full bg-slate-700/50 h-2 mt-3 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full w-[85%] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
          </div>
        </div>
      </div>

      {/* 4 CHARTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-grow min-h-0">
        <div className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50 flex flex-col shadow-inner hover:bg-slate-800/40 transition-colors">
          <h5 className="text-slate-300 text-sm font-semibold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            Distribuição Temporal (Receita/Vendas)
          </h5>
          <div className="flex-grow min-h-[180px]"><RevenueChart /></div>
        </div>

        <div className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50 flex flex-col shadow-inner hover:bg-slate-800/40 transition-colors">
          <h5 className="text-slate-300 text-sm font-semibold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
            Crescimento de Base Ativa
          </h5>
          <div className="flex-grow min-h-[180px]"><UsersChart /></div>
        </div>

        <div className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50 flex flex-col shadow-inner hover:bg-slate-800/40 transition-colors">
          <h5 className="text-slate-300 text-sm font-semibold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-pink-500"></span>
            Composição de Portfólio (Categorias)
          </h5>
          <div className="flex-grow min-h-[180px]"><CompositionPieChart /></div>
        </div>

        <div className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50 flex flex-col shadow-inner hover:bg-slate-800/40 transition-colors">
          <h5 className="text-slate-300 text-sm font-semibold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Tendência Semanal de Performance
          </h5>
          <div className="flex-grow min-h-[180px]"><PerformanceLineChart /></div>
        </div>
      </div>
    </div>
  );
};

const DashboardMockup = ({ title, metric, change, fullScreen }) => {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      {/* Title Header */}
      <div className={`flex justify-between ${fullScreen ? 'items-center border-b border-slate-700/50 pb-5 mb-2' : 'items-start mb-2 pt-2'}`}>
        <div>
          <h4 className={`text-slate-400 font-medium ${fullScreen ? 'text-xl' : 'text-sm'}`}>{title}</h4>
          {!fullScreen && (
            <div className="text-2xl mt-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">{metric}</div>
          )}
        </div>

        {!fullScreen && (
          <div className={`px-3 py-1.5 rounded-lg font-bold shadow-md text-xs ${change >= 0 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
            {change >= 0 ? '+' : ''}{change}%
          </div>
        )}
      </div>

      {/* Body Content */}
      <div className={`flex-grow flex ${fullScreen ? 'flex-col overflow-y-auto' : 'flex-col'} gap-4 relative min-h-0`}>
        {fullScreen ? (
          <FullscreenDashLayout title={title} />
        ) : (
          <>
            <div className="flex-grow w-full relative min-h-[150px]">
              {title && (title.includes('Receita') || title.includes('Vendas') || title.includes('Crescimento')) ? <RevenueChart /> : <UsersChart />}
            </div>

            <div className="grid grid-cols-2 gap-3 mt-auto shrink-0 pb-2">
              <div className="bg-slate-800/30 rounded-lg p-3 border border-slate-700/50 hover:bg-slate-700/40 transition-colors">
                <div className="text-xs text-slate-500">Meta Anual</div>
                <div className="font-medium text-slate-300 text-sm">85% Atingido</div>
                <div className="w-full bg-slate-700 h-2 mt-2 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full w-[85%] shadow-[0_0_10px_rgba(59,130,246,0.6)]"></div>
                </div>
              </div>
              <div className="bg-slate-800/30 rounded-lg p-3 border border-slate-700/50 hover:bg-slate-700/40 transition-colors">
                <div className="text-xs text-slate-500">Status do Relatório</div>
                <div className="font-medium text-emerald-400 flex items-center gap-1.5 mt-1 text-sm">
                  <span className="rounded-full bg-emerald-500 animate-pulse w-2 h-2 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span> Ideal / On-time
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardMockup;
