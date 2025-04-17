// components/ThreeColumnLayout.tsx
import { ReactNode } from "react";

export default function ThreeColumnLayout({
  left,
  center,
  right,
}: {
  left?: ReactNode;
  center: ReactNode;
  right?: ReactNode;
}) {

    // 判断中间内容在不同情况下占多少列
  let centerColSpan = "md:col-span-6"; // 默认中间占6列
  if (!left && right) centerColSpan = "md:col-span-9"; // 没有左栏，占9列
  if (left && !right) centerColSpan = "md:col-span-9"; // 没有右栏，占9列
  if (!left && !right) centerColSpan = "md:col-span-12"; // 两侧都没，占满

  
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 max-w-7xl mx-auto px-4 py-6">
      {/* 左栏：移动端排第二 */}
      {left && (
        <aside className="order-2 md:order-none col-span-1 md:col-span-3">
          {left}
        </aside>
      )}

      {/* 中间主内容：移动端排第一 */}
      <main className={`order-1 md:order-none col-span-1 ${centerColSpan}`}>
        {center}
      </main>

      {/* 右栏：移动端排第三 */}
      {right && (
        <aside className="order-3 md:order-none col-span-1 md:col-span-3">
          {right}
        </aside>
      )}
    </div>
  );
}
