# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Важно: версия Next.js

Это Next.js 16 — в ней есть breaking changes по сравнению с тем, что встречается в обучающих данных. Перед написанием кода читай актуальную документацию в `node_modules/next/dist/docs/`.

## Команды

```bash
npm run dev      # dev-сервер
npm run build    # production сборка
npm run lint     # ESLint
npm run deploy   # сборка + публикация через gh-pages в ветку deploy
```

## Архитектура

### Глобальное состояние — `StateWrapper`

`components/StateWrapper.tsx` — единственный клиентский провайдер, обёртывает всё приложение внутри `RootLayout`. Хранит `modal: ModalType | null` и передаёт `setModal` в `Navbar` и в компоненты модалок. Если нужно добавить глобальное состояние — добавляй сюда.

### Модалки

Тип `ModalType` (`types/modal.ts`) — union строковых литералов открытых модалок (`"login" | "register" | "callback" | null`). Новые модалки: добавить значение в тип, создать компонент в `components/modals/` на базе `BaseModal`, подключить в `StateWrapper`.

`BaseModal` использует Radix UI `Dialog` и отвечает только за оверлей и позиционирование. Конкретная модалка рендерит содержимое внутри него и управляет формой через `react-hook-form`.

### Компоненты лэйаута

Страницы оборачивают контент в два вложенных компонента из `components/common/`:

**`PaddingGlobal`** — задаёт горизонтальные отступы по брейкпоинтам. Значения хранятся в объекте `paddings` внутри компонента: `base` (до 480px), `sm` (480px+), `md` (768px+).

**`ContainerLarge`** — управляет шириной контейнера. Значения хранятся в объекте `widths` по тем же брейкпоинтам. Сейчас все значения `w-full`, меняй здесь когда нужно ограничить ширину.

Порядок вложенности: `PaddingGlobal` → `ContainerLarge` → контент страницы.

### Стилизация

- Tailwind v4: конфигурация через CSS-переменные в `app/globals.css`, без `tailwind.config`. Дизайн-токены задаются в `:root` и пробрасываются в Tailwind через `@theme inline`.
- Утилита `cn()` из `lib/utils.ts` (`clsx` + `tailwind-merge`) — использовать для условных классов.
- **Инлайн-стили (`style={{...}}`) не использовать** — только Tailwind-классы.
- Шрифт подключён через `next/font/google` как переменная `--font-main` (сейчас Poppins), доступна как `font-sans`.
