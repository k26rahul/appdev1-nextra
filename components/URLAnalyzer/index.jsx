import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function URLAnalyzer() {
  const [url, setUrl] = useState(
    "https://www.example.com:8080/path/to/resource?param1=value1&param2=value2#fragment",
  );
  const [parsedUrl, setParsedUrl] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const parsed = new URL(url);
      setParsedUrl(parsed);
    } catch (error) {
      alert("Invalid URL. Please enter a valid URL.");
    }
  };

  return (
    <div className="rounded bg-gray-900 py-8 text-gray-100">
      <div className="container mx-auto max-w-2xl p-4">
        <Card className="border-gray-700 bg-gray-800">
          <CardHeader>
            <CardTitle className="text-gray-100">URL Parser</CardTitle>
            <CardDescription className="text-gray-400">
              Enter a URL to see its components
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter URL (e.g., https://www.example.com:8080/path?param=value#fragment)"
                className="w-full border-gray-600 bg-gray-700 text-gray-100 focus:border-blue-500 focus:ring-blue-500"
              />
              <Button
                type="submit"
                className="w-full bg-blue-600 text-white hover:bg-blue-700"
              >
                Parse URL
              </Button>
            </form>

            {parsedUrl && (
              <div className="mt-6 space-y-4">
                <h2 className="text-2xl font-bold text-blue-400">
                  {parsedUrl.hostname}
                </h2>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-300">
                    Components
                  </h3>
                  <p>
                    <strong className="text-gray-400">
                      Scheme (Protocol):
                    </strong>{" "}
                    <span className="text-blue-300">
                      {parsedUrl.protocol.slice(0, -1)}
                    </span>
                  </p>
                  <p>
                    <strong className="text-gray-400">Subdomain:</strong>{" "}
                    <span className="text-blue-300">
                      {parsedUrl.hostname.split(".")[0] !== parsedUrl.hostname
                        ? parsedUrl.hostname.split(".")[0]
                        : "N/A"}
                    </span>
                  </p>
                  <p>
                    <strong className="text-gray-400">Domain Name:</strong>{" "}
                    <span className="text-blue-300">
                      {parsedUrl.hostname.split(".").slice(-2, -1)[0]}
                    </span>
                  </p>
                  <p>
                    <strong className="text-gray-400">
                      Top-Level Domain (TLD):
                    </strong>{" "}
                    <span className="text-blue-300">
                      {parsedUrl.hostname.split(".").pop()}
                    </span>
                  </p>
                  <p>
                    <strong className="text-gray-400">Port:</strong>{" "}
                    <span className="text-blue-300">
                      {parsedUrl.port || "Default"}
                    </span>
                  </p>
                  <p>
                    <strong className="text-gray-400">Path:</strong>{" "}
                    <span className="text-blue-300">
                      {parsedUrl.pathname || "/"}
                    </span>
                  </p>
                  <p>
                    <strong className="text-gray-400">Query String:</strong>{" "}
                    <span className="text-blue-300">
                      {parsedUrl.search || "N/A"}
                    </span>
                  </p>
                  <p>
                    <strong className="text-gray-400">Fragment:</strong>{" "}
                    <span className="text-blue-300">
                      {parsedUrl.hash || "N/A"}
                    </span>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-300">
                    Origin
                  </h3>
                  <p className="text-blue-300">{parsedUrl.origin}</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
