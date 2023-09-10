import { ComponentPropsWithoutRef } from 'react';

interface MissingAnnounceContainerProps extends ComponentPropsWithoutRef<'section'> {}

const MissingAnnounceContainer = ({ ...rest }: MissingAnnounceContainerProps) => {
  return (
    <section className="h-[100vh] snap-start snap-always" {...rest}>
      missing
      {/* missing announce */}
      {/* title */}
      {/* missing list */}
      {/* missing card */}
    </section>
  );
};

export default MissingAnnounceContainer;
