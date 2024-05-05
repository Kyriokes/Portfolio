import { useState } from "react";
import { Document, Page } from "react-pdf";
import pdf from "../assets/CV.pdf";
import { ArrowL, ArrowR} from "../assets/icons"

export const Pdf = () => {
	const [numPages, setNumPages] = useState<number>();
	const [pageNumber, setPageNumber] = useState<number>(1);

	function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
		setNumPages(numPages);
	}

	const goToPreviousPage = (): void => {
		setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));
	};

	const goToNextPage = (): void => {
		setPageNumber((prevPageNumber) =>
			Math.min(prevPageNumber + 1, numPages || 1)
		);
	};

	const openPdfInNewWindow = () => {
		window.open(pdf, "_blank");
	};

	return (
		<div className="">
			<Document
				file={pdf}
				onLoadSuccess={onDocumentLoadSuccess}
				className="flex items-center overflow-x-scroll max-w-max"
			>
				<Page
					pageNumber={pageNumber}
					renderTextLayer={false}
					renderAnnotationLayer={false}
				/>
			</Document>
			<div className="flex my-1">
				<button
					className="m-1 shadow bg-cTeal hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
					onClick={goToPreviousPage}
					disabled={pageNumber <= 1}
				>
					<ArrowL/>
				</button>
				<button
					className="m-1 shadow bg-cTeal hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
					onClick={goToNextPage}
					disabled={pageNumber >= (numPages || 1)}
				>
					<ArrowR/>
				</button>
				<button
					className="m-1 shadow bg-cTeal hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
					onClick={openPdfInNewWindow}
				>
					Nueva ventana
				</button>
			</div>
		</div>
	);
};
