import React, { useEffect } from 'react';

interface AdContainerProps {
  slotId: string;
  className?: string;
}

export function AdContainer({ slotId, className = "" }: AdContainerProps) {
  useEffect(() => {
    try {
      const adsbygoogle = (window as any).adsbygoogle || [];
      adsbygoogle.push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className={`ad-container ${className} flex justify-center items-center my-5 min-h-[250px] bg-slate-100 border border-slate-200 rounded-lg p-4`} data-ad-status="unfilled">
      <ins className="adsbygoogle"
           style={{ display: 'block', width: '100%', minHeight: "250px" }}
           data-ad-client="ca-PUB-YOUR_CLIENT_ID"
           data-ad-slot={slotId}
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  );
}
