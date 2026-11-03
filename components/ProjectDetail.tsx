import React from 'react';
import { Project } from '../types';
import { MarkdownText } from './MarkdownText';
import { navigate } from '../hooks/useRoute';

interface ProjectDetailProps {
  project: Project;
}

type Block = { kind: 'p'; text: string } | { kind: 'ul'; items: string[] };

/** Splits a long description into paragraphs, grouping "•" lines into lists. */
const toBlocks = (text: string): Block[] => {
  const blocks: Block[] = [];
  for (const raw of text.split('\n')) {
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith('•')) {
      const item = line.replace(/^•\s*/, '');
      const last = blocks[blocks.length - 1];
      if (last?.kind === 'ul') last.items.push(item);
      else blocks.push({ kind: 'ul', items: [item] });
    } else {
      blocks.push({ kind: 'p', text: line });
    }
  }
  return blocks;
};

/** A case study, rendered as the same plain column as the home page. */
const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const images = [project.imageUrl, ...(project.galleryImages ?? []).filter((src) => src !== project.imageUrl)];

  return (
    <main>
      <p>
        <a
          href="/"
          onClick={(e) => {
            if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
            e.preventDefault();
            navigate('/');
          }}
        >
          ← James Jullies
        </a>
      </p>

      <h1>{project.title}</h1>

      <p>
        <MarkdownText text={project.description} />
      </p>

      {toBlocks(project.longDescription).map((block, i) =>
        block.kind === 'p' ? (
          <p key={i}>
            <MarkdownText text={block.text} />
          </p>
        ) : (
          <ul key={i}>
            {block.items.map((item, j) => (
              <li key={j}>
                <MarkdownText text={item} />
              </li>
            ))}
          </ul>
        )
      )}

      {project.link && (
        <p>
          <a href={project.link}>{project.linkLabel ?? 'View project'}</a>
        </p>
      )}

      {images.map((src, i) => (
        <figure key={src}>
          <img
            src={src}
            alt={`${project.title}, image ${i + 1} of ${images.length}`}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
        </figure>
      ))}
    </main>
  );
};

export default ProjectDetail;
