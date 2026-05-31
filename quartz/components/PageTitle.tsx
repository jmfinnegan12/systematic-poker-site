import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir} class="page-title-link">
        <svg class="page-title-logo" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M12 2C9 6 4 9 4 13.5 4 16 6 18 8.5 18c1.2 0 2.3-.5 3-1.3-.2 1.8-1 3.3-2.5 4.3h6c-1.5-1-2.3-2.5-2.5-4.3.7.8 1.8 1.3 3 1.3 2.5 0 4.5-2 4.5-4.5C20 9 15 6 12 2z"></path>
        </svg>
        <span>{title}</span>
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
.page-title-link {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: #2c7a73;
}
:root[saved-theme="dark"] .page-title-link {
  color: #4fd1c5;
}
.page-title-logo {
  height: 1.4rem;
  width: auto;
  flex: none;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
