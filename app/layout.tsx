import "@/styles/normalise.css";
import "@/styles/reset.css";
import "@/styles/globals.css";

interface IProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: IProps) {
	return(
		<html
			lang="en">

			<head />

			<body>
				<div
					id="index layout"
					className="relative h-full w-full grid grid-flow-row place-items-center overflow-x-hidden">
					{ /* Todo change the text-white above to a theme, using css vars and tailwind so it's consistent */ }

					{ children }
				</div>
			</body>
			
		</html>
	);
}
