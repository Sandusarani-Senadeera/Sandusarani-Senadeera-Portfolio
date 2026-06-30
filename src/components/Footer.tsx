import SocialLinks from "./SocialLinks";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-6 sm:py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-brand-orange">{profile.fullName}</span>. All
          rights reserved.
        </p>
        <SocialLinks size="sm" />
      </div>
    </footer>
  );
}
