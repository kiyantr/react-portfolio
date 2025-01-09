import React, { useState } from "react";

export interface GraphNode {
    id: string;
    label: string;
    color: string; // Tailwind color classes
    children?: GraphNode[];
  }
  
interface NodeProps {
  node: GraphNode;
  parentColor: string;
  isRoot?: boolean;
}

const Node: React.FC<NodeProps> = ({ node, parentColor, isRoot = false }) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(
        // isRoot ? false : node.id !== "backend" ? true : false,
        // isRoot ? false : node.id !== "database" ? false : true,
        false
      );

  const toggleCollapse = () => {
    if (node.children) {
      setIsCollapsed((prev) => !prev);
    }
  };

  return (
    <div className="flex flex-col items-center relative w-full text-sm">
      {/* Connector Line */}
      {!isRoot && (
        <div
        className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-5 h-5 w-0 border-l-2 ${node.color} transition-all duration-300`}
        ></div>
      )}

      {/* Node */}
      <div
        className={`flex items-center justify-center px-4 py-2 rounded-full shadow-md cursor-pointer ${node.color} text-white`}
        onClick={toggleCollapse}
      >
        {node.label}
      </div>

      {/* Children Nodes */}
      {node.children && !isCollapsed && (
        <div className="flex space-x-4 mt-8 w-full">
          {node.children.map((child) => (
            <div key={child.id} className="relative">
              {/* Horizontal Connector */}
              <div
                // className={`absolute top-2 left-0 w-5 h-0.5 ${node.color} transition-all duration-300`}
              ></div>
              <Node node={child} parentColor={node.color} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Node;
