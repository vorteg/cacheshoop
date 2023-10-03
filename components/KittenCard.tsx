import Image from 'next/image';

interface KittenProps {
  name: string;
  role: string;
  imageUrl: string;
}

const KittenCard: React.FC<KittenProps> = ( { name, role, imageUrl } ) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 m-4">
      <div className="relative aspect-square">
        <Image src={imageUrl} alt={name} fill className="object-cover" />
      </div>
      <h2 className="text-black text-xl font-semibold mt-2">{name}</h2>
      <p className="text-gray-500">{role}</p>
    </div>
  );
};

export default KittenCard;