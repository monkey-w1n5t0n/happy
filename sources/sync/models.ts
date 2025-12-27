/**
 * Model definitions for different AI providers
 * Each agent type (Claude, Codex, Gemini) has its own set of available models
 */

export interface ModelInfo {
    id: string;           // Full model identifier sent to API
    name: string;         // Display name in UI
    shortName: string;    // Short name for button display
    isDefault?: boolean;  // Whether this is the default model for the agent
}

// Claude models (Anthropic)
export const CLAUDE_MODELS: ModelInfo[] = [
    { id: 'claude-sonnet-4-20250514', name: 'Sonnet 4', shortName: 'Sonnet 4', isDefault: true },
    { id: 'claude-opus-4-20250514', name: 'Opus 4', shortName: 'Opus 4' },
    { id: 'claude-3-7-sonnet-20250219', name: 'Sonnet 3.7', shortName: 'Sonnet 3.7' },
    { id: 'claude-3-5-sonnet-20241022', name: 'Sonnet 3.5', shortName: 'Sonnet 3.5' },
];

// Codex models (OpenAI)
export const CODEX_MODELS: ModelInfo[] = [
    { id: 'o3', name: 'o3', shortName: 'o3', isDefault: true },
    { id: 'o4-mini', name: 'o4-mini', shortName: 'o4-mini' },
    { id: 'gpt-4.1', name: 'GPT-4.1', shortName: 'GPT-4.1' },
];

// Gemini models (Google)
export const GEMINI_MODELS: ModelInfo[] = [
    { id: 'gemini-2.5-pro', name: 'Gemini 2.5 Pro', shortName: '2.5 Pro', isDefault: true },
    { id: 'gemini-2.5-flash', name: 'Gemini 2.5 Flash', shortName: '2.5 Flash' },
];

/**
 * Get available models for a given agent type
 */
export function getModelsForAgent(agent: 'claude' | 'codex' | 'gemini'): ModelInfo[] {
    switch (agent) {
        case 'claude':
            return CLAUDE_MODELS;
        case 'codex':
            return CODEX_MODELS;
        case 'gemini':
            return GEMINI_MODELS;
        default:
            return CLAUDE_MODELS;
    }
}

/**
 * Get the default model for a given agent type
 */
export function getDefaultModelForAgent(agent: 'claude' | 'codex' | 'gemini'): ModelInfo {
    const models = getModelsForAgent(agent);
    return models.find(m => m.isDefault) || models[0];
}

/**
 * Get a model by its ID
 */
export function getModelById(modelId: string): ModelInfo | null {
    const allModels = [...CLAUDE_MODELS, ...CODEX_MODELS, ...GEMINI_MODELS];
    return allModels.find(m => m.id === modelId) || null;
}

/**
 * Check if a model ID is valid for a given agent
 */
export function isValidModelForAgent(modelId: string, agent: 'claude' | 'codex' | 'gemini'): boolean {
    const models = getModelsForAgent(agent);
    return models.some(m => m.id === modelId);
}
