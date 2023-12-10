import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext'; 
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
function handleClick(event) {
  console.info('You clicked a breadcrumb.');
}

export default function BreadCumb({ breadcumb = '' }) {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb" sx={{color:'primary.main'}} separator={
          <PlayArrowIcon fontSize="small" style={{ verticalAlign: 'middle' }} />
        }>
        <Link underline="hover" color="inherit" href="/">
          Əsas səhifə
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/gallery-blog"
        >
          Bloq
        </Link>
        {
        breadcumb ?
          <Link
            underline="hover"
            color="primary"
            href={`/gallery-blog/blog/${breadcumb}`}
            aria-current="page"
            sx={{fontWeight:600}}
          >
            {breadcumb}
          </Link> : null
          }
      </Breadcrumbs>
    </div>
  );
}
