import path from "path";
import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";

const PROJECTS_PATH = path.join(process.cwd(), "content", "projects");

export function getSlugs() {
    const paths = sync(`${PROJECTS_PATH}/*.mdx`);

    return paths.map(path => {
        const parts = path.split("/"); 
        const fileName = parts[parts.length - 1];
        const [slug, _ext] = fileName.split(".");
        return slug;
    });
};

export function getProjectFromSlug(slug) {
    const projectPath = path.join(PROJECTS_PATH, `${slug}.mdx`);
    const source = fs.readFileSync(projectPath);
    const { content, data } = matter(source);

    return {
        content,
        meta: {
            slug,
            excerpt: data.excerpt,
            title: data.title,
            tags: data.tags,
            image: data.image,
            date: data.date
        }
    };
};

export function getAllProjects() {
    const projects = getSlugs().map(slug => getProjectFromSlug(slug)).sort((a, b) => {
        if (a.meta.date > b.meta.date) return 1;
        if (a.meta.date < b.meta.date) return -1;
        return 0;
    }).reverse();

    return projects;
};