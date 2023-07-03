import Avatar from "@/components/atoms/Avatar"
import Button from "@/components/atoms/Button"

import person1 from "@/assets/images/Person=Marcus Chen.png"
import person2 from "@/assets/images/Person=Lily Patel.png"
import person3 from "@/assets/images/Person=Harper Singh.png"
import person4 from "@/assets/images/Person=David Singh.png"
import person5 from "@/assets/images/Person=Ava Gupta.png"
import person6 from "@/assets/images/Person=Adam Green.png"

const persons = [
  person1,
  person2,
  person3,
  person4,
  person5,
  person6,
]

export default function Request() {
  return (
    <div className="flex flex-col items-center  mx-28 mb-48 space-y-16">
      <div className="flex">
        {persons.map((person, index) => (
          <Avatar key={`person-${index}`} src={person} alt="Avatar"
            className="w-20 h-20 -m-4 border-8 border-noble-black-700" />
        ))}
      </div>
      <div className="space-y-6 text-center">
        <p className="text-heading-l-medium text-noble-black-0">
          Sophia, Kamil, Emily and 2,012 others are already here!
        </p>
        <p className="text-body-xl-medium text-noble-black-300">
          {"But... it looks like you don't have access to this workspace."}
        </p>
      </div>
      <div className="flex flex-col items-center space-y-6">
        <Button label="Access request" size="large" />
        <p className="whitespace-nowrap text-body-s-medium text-noble-black-400">
          or
        </p>
        <Button label="Back" variant="tertiary" size="large" />
      </div>
    </div>
  )
}
