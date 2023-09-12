"use client"

import { useState } from "react"
import User from "@/components/molecules/User"
import workspace from "@/assets/images/Intellisys.png"
import user from "@/assets/images/Person=Ryan Lee.png"
import Icon, { iconName } from "@/components/atoms/Icon"

type SidebarProps = {}

type ProjectType = {
  id: string
  name: string
  iconName: iconName
  iconColor: string
}

export default function Sidebar({ ...props }: SidebarProps) {
  const currentProjectId = "1"
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [projects, setProjects] = useState<ProjectType[]>([
    {
      id: "1",
      name: "Orbital Oddysey",
      iconName: "square",
      iconColor: "text-stem-green-500",
    },
    {
      id: "2",
      name: "Digital Product Launch",
      iconName: "triangle",
      iconColor: "text-red-power-600",
    },
    {
      id: "3",
      name: "Brand Refresh",
      iconName: "square",
      iconColor: "text-happy-orange-600",
    },
    {
      id: "4",
      name: "Social Media Strategy",
      iconName: "octagon",
      iconColor: "text-heisenberg-blue-500",
    },
  ])

  return (
    <div className="relative col-span-2 rounded-[20px] bg-noble-black-800">
      <button
        className="flex h-24 w-full items-center justify-between border-b-2 border-noble-black-700 p-6"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <User
          src={workspace}
          alt="Workspace avatar"
          name="Intellisys"
          description="12 members"
        />
        <Icon name="chevronDown" className={dropdownOpen ? "rotate-180" : ""} />
      </button>
      <div className="select-none space-y-9 border-b-2 border-noble-black-700 p-6">
        <p className="text-body-s-semibold">GENERAL</p>
        <label className="flex items-center space-x-4">
          <Icon name="search" />
          <input
            className="w-full bg-transparent text-body-m-semibold text-noble-black-100 outline-none placeholder:text-noble-black-0"
            placeholder="Search"
          />
        </label>
        <button className="flex items-center space-x-4">
          <Icon name="creditCard" />
          <span className="text-body-m-semibold text-noble-black-100">
            Billing
          </span>
        </button>
      </div>
      <div className="select-none space-y-6 py-6">
        <p className="mx-6 text-body-s-semibold">PROJECTS</p>
        <div className="mx-2 flex flex-col space-y-2">
          {projects.map(({ id, name, iconName, iconColor }) => (
            <button
              key={`project-${id}`}
              className={`flex flex-row items-center space-x-4 px-4 py-[14px] 
              ${
                currentProjectId === id
                  ? "rounded-lg border-t-2 border-glass-stroke bg-glass-fill"
                  : ""
              }`}
            >
              <Icon name={iconName} className={`${iconColor}`} />
              <p className="text-body-m-semibold text-noble-black-100">
                {name}
              </p>
            </button>
          ))}
          <button className="flex flex-row items-center space-x-4 px-4 py-[14px] text-noble-black-400">
            <Icon name="plusCircle" />
            <p className="text-body-m-semibold">Add new project</p>
          </button>
        </div>
      </div>
      <button
        className="absolute bottom-0 left-0 right-0 m-2 flex items-center justify-between
          rounded-2xl border-t-2 border-glass-stroke bg-glass-fill p-4"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <User
          src={user}
          alt="User avatar"
          name="Ryan Lee"
          description="Premium"
          status="active"
        />
        <Icon name="cog" size="large" />
      </button>
    </div>
  )
}
