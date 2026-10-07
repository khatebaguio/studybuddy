import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'

type Task = { id: number; title: string; due: string; done: boolean }
type ContextValue = { tasks: Task[]; toggleTask: (id: number) => void; addTask: (title: string) => void }
const StudyBuddyContext = createContext<ContextValue | null>(null)

export function StudyBuddyProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Review Chapter 1', due: 'Today', done: true },
    { id: 2, title: 'Finish Java activity', due: 'Today', done: false },
    { id: 3, title: 'Study for quiz', due: 'Tomorrow', done: false },
    { id: 4, title: 'Read Database notes', due: 'Oct 10', done: false }
  ])
  const value = useMemo(() => ({
    tasks,
    toggleTask: (id: number) => setTasks(current => current.map(t => t.id === id ? { ...t, done: !t.done } : t)),
    addTask: (title: string) => setTasks(current => [...current, { id: Date.now(), title, due: 'Today', done: false }])
  }), [tasks])
  return <StudyBuddyContext.Provider value={value}>{children}</StudyBuddyContext.Provider>
}
export function useStudyBuddy() {
  const value = useContext(StudyBuddyContext)
  if (!value) throw new Error('useStudyBuddy must be used within StudyBuddyProvider')
  return value
}
