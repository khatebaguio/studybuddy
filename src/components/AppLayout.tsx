import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { Bell, BookOpen, CalendarDays, CheckSquare, CircleHelp, FileText, Flame, LayoutDashboard, MessageSquare, Search, Settings, Timer, Trophy, Users, UserRoundPlus } from 'lucide-react'

const items = [
  { to: '/dashboard', label: 'Dashboard', Icon: LayoutDashboard },
  { to: '/find-buddy', label: 'Find Study Buddy', Icon: UserRoundPlus },
  { to: '/groups', label: 'Study Groups', Icon: Users },
  { to: '/messages', label: 'Messages', Icon: MessageSquare, badge: '3' },
  { to: '/sessions', label: 'Study Sessions', Icon: CalendarDays },
  { to: '/notes', label: 'Notes & Resources', Icon: FileText },
  { to: '/tasks', label: 'My Tasks', Icon: CheckSquare },
  { to: '/timer', label: 'Study Timer', Icon: Timer },
  { to: '/qa', label: 'Q&A', Icon: CircleHelp },
  { to: '/leaderboard', label: 'Leaderboard', Icon: Trophy },
  { to: '/settings', label: 'Settings', Icon: Settings }
]
export default function AppLayout() {
  const location = useLocation()
  const title = items.find(i => i.to === location.pathname)?.label ?? 'Dashboard'
  return <div className="app-shell">
    <aside className="sidebar">
      <NavLink to="/" className="brand"><span className="brand-mark">✦</span><span><b>Study<span className="brand-accent">Buddy</span></b><small>Study Together. Achieve More.</small></span></NavLink>
      <nav>{items.map(({ to, label, Icon, badge }) => <NavLink key={to} to={to} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}><Icon size={17}/><span>{label}</span>{badge && <em>{badge}</em>}</NavLink>)}</nav>
      <div className="sidebar-quote">Small steps<br/>today,<br/>big dreams<br/>tomorrow. <span>♡</span></div>
      <div className="sidebar-profile"><div className="avatar">K</div><div><b>Khate Charmeille</b><small>BSIT 3rd Year</small></div></div>
    </aside>
    <main className="main-area">
      <header className="topbar"><div className="search-box"><Search size={17}/><input placeholder="Search for study buddies, groups, or topics..." /></div><button className="icon-button" aria-label="Notifications"><Bell size={19}/><i/></button><div className="top-profile"><div className="avatar">K</div><div><b>Hi, Khate!</b><small>BSIT 3rd Year</small></div><span>⌄</span></div></header>
      <div className="page-content"><div className="mobile-title">{title}</div><Outlet /></div>
    </main>
  </div>
}
