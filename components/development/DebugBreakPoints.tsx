type DebugBreakpointProps = {
  display: boolean;
};

export default function DebugBreakpoint({ display }: DebugBreakpointProps) {
  if (!display) return null;

  return (
    <div className="fixed bottom-3 left-3 z-50 p-2 text-xs text-white bg-red-500 rounded-full w-8 h-8 items-center justify-center flex">
      <div className="sm:hidden">B</div>
      <div className="hidden sm:block md:hidden">SM</div>
      <div className="hidden md:block lg:hidden">MD</div>
      <div className="hidden lg:block xl:hidden">LG</div>
      <div className="hidden xl:block 2xl:hidden">XL</div>
      <div className="hidden 2xl:block">2XL</div>
    </div>
  );
}
