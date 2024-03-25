'use client';
import { useRouter } from 'next/navigation';

const MenuItem = ({ icon: Icon, label, href }) => {
  const router = useRouter();

  const handleClick = () => {
    href === 'disabled' ? '' : router.push(href);
  };

  return (
    <div
      onClick={handleClick}
      className="font-serif  mt-1 flex gap-5 text-black w-full items-center px-4 p-3 hover:bg-gray-100 rounded-lg cursor-pointer"
    >
      <Icon className="w-15 h-8" />
      <p className="hidden md:inline-flex">{label}</p>
    </div>
  );
};

export default MenuItem;
