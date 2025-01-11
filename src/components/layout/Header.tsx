interface HeaderProps {
  title: string;
  subtitle?: string;
}

export const Header = ({ title, subtitle }: HeaderProps) => (
  <header className='mb-12 text-center'>
    <h1 className='mb-2 text-4xl font-bold text-gray-800'>{title}</h1>
    {subtitle && <p className='text-gray-600'>{subtitle}</p>}
  </header>
);
