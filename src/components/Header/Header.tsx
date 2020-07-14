import Link from 'next/link'
import { HeaderBody, AddPost, SVGPlus, Notes, SVGHome, LatestPosts, BackHome } from './StyledHeader';
import { IHeaderProps } from '../../types'


const Header = ({ location }: IHeaderProps) => {

  return (
    <div>
      <HeaderBody>
        <Link href="/">
          <BackHome href="#">
            <Notes>
              <SVGHome viewBox="0 0 24 24">
                <path d="m11.5 5.5c-.552 0-1-.448-1-1v-3.5c0-.552.448-1 1-1s1 .448 1 1v3.5c0 .552-.448 1-1 1z" data-original="#000000" data-old_color="#000000" fill="#FFFFFF" /><path d="m16.25 5.5c-.552 0-1-.448-1-1v-3.5c0-.552.448-1 1-1s1 .448 1 1v3.5c0 .552-.448 1-1 1z" data-original="#000000" data-old_color="#000000" fill="#FFFFFF" /><path d="m18.25 2.25h-13.5c-1.517 0-2.75 1.233-2.75 2.75v16.25c0 1.517 1.233 2.75 2.75 2.75h13.5c1.517 0 2.75-1.233 2.75-2.75v-16.25c0-1.517-1.233-2.75-2.75-2.75zm-11.25 5.75h5c.552 0 1 .448 1 1s-.448 1-1 1h-5c-.552 0-1-.448-1-1s.448-1 1-1zm10 10h-10c-.552 0-1-.448-1-1s.448-1 1-1h10c.552 0 1 .448 1 1s-.448 1-1 1zm0-4h-10c-.552 0-1-.448-1-1s.448-1 1-1h10c.552 0 1 .448 1 1s-.448 1-1 1z" data-original="#000000" data-old_color="#000000" fill="#FFFFFF" />
              </SVGHome>
            </Notes>
            <LatestPosts>Latest posts</LatestPosts>
          </BackHome>
        </Link>
        {(location !== "/new") && (
          <Link href="/new">
            <AddPost href="#">
              <SVGPlus viewBox="0 0 448 448">
                <path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0" data-original="#000000" data-old_color="#000000" />
              </SVGPlus>
            </AddPost>
          </Link>
        )}
      </HeaderBody>
    </div>
  )
}

export default Header;
