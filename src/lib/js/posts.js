import _ from 'lodash'
import {readdir, readFileSync} from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';

const directoryPath = path.join(process.cwd(), 'src/data/posts');

export const markdownFiles = [];

readdir(directoryPath, function (err, files) {
  if (err) {
    console.error('Error reading directory:', err);
  } else {
    //console.log('Files in directory:', files);
    files.forEach(file => {
      if (file.endsWith('.md')) {
        markdownFiles.push(file);
      }
    })
  }
});


export function _getPost(filename) {
  const fullPath = path.join(directoryPath, `${filename}`);
  const fileContents = readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const html = marked.marked(content);

  return {
    permalink: filename.replace('.md', ''),
    title: data.title,
    description: data.description,
    date: data.date,
    content,
    html,
    visible: (data.visibility) ? ( (data.visibility == "visible") ? true : false ) : true,
    modals: data.modals
  };
}