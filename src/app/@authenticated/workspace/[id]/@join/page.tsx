import Avatar from "@/components/atoms/Avatar"
import Button from "@/components/atoms/Button"

import person1 from "@/assets/images/Person=Marcus Chen.png"
import person2 from "@/assets/images/Person=Lily Patel.png"
import person3 from "@/assets/images/Person=Harper Singh.png"
import person4 from "@/assets/images/Person=David Singh.png"
import person5 from "@/assets/images/Person=Ava Gupta.png"
import person6 from "@/assets/images/Person=Adam Green.png"
import avatar from "@/assets/images/Vertexia.png"

const persons = [
  person1,
  person2,
  person3,
  person4,
  person5,
  person6,
]

export default function Join() {
  return (
    <div className="flex flex-col items-center  mx-28 mb-48 space-y-16">
      <div className="flex flex-col space-y-6 items-center">
        <Avatar src={avatar} alt="Worspace Image" className="w-20 h-20 rounded-[32px]" />
        <div className="text-center space-y-2">
          <p className="text-heading-xl-bold text-noble-black-0">
            Vertexia
          </p>
          <p className="text-body-xl-medium text-stem-green-500">
            vertexia.artficium.app
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <Button label="Change workspace" variant="ghost" size="large" />
        <Button label="Join Now" size="large" />
      </div>
      <div className="flex items-center space-x-6">
        <div className="flex">
          {persons.map((person, index) => (
            <Avatar key={`person-${index}`} src={person} alt="Avatar"
              className="w-12 h-12 -m-2 border-4 border-noble-black-700 rounded-2xl" />
          ))}
        </div>
        <p className="text-body-m-medium text-noble-black-300">and 873 others have already joined</p>
      </div>
    </div>
  )
}
