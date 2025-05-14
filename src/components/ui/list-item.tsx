import * as React from "react"
import Link from "next/link"

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string
  href: string
  children?: React.ReactNode
}

export const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ title, href, children, ...props }, ref) => {
    return (
      <li>
        <Link
          href={href}
          ref={ref}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </li>
    )
  }
)
ListItem.displayName = "ListItem"